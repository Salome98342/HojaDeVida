const supabase = require('../config/supabase');

// Crear nueva solicitud de comisión
const createCommission = async (req, res) => {
  try {
    const { name, email, commissionType, description, references, budget, deadline } = req.body;

    // Validación de campos requeridos
    if (!name || !email || !commissionType || !description) {
      return res.status(400).json({ 
        error: 'Nombre, email, tipo de comisión y descripción son campos obligatorios' 
      });
    }

    // Validación de tipo de comisión
    const validTypes = ['character-sheet', 'fanart', 'portrait', 'full-body'];
    if (!validTypes.includes(commissionType)) {
      return res.status(400).json({ 
        error: 'Tipo de comisión inválido' 
      });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Email inválido' 
      });
    }

    const { data, error } = await supabase
      .from('commissions')
      .insert([
        {
          name,
          email,
          commission_type: commissionType,
          description,
          reference_links: references || null,
          budget: budget || null,
          deadline: deadline || null,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('Error al crear comisión:', error);
      return res.status(500).json({ 
        error: 'Error al enviar la solicitud de comisión',
        details: error.message 
      });
    }

    res.status(201).json({
      message: 'Solicitud de comisión enviada exitosamente',
      commission: data[0]
    });
  } catch (error) {
    console.error('Error en createCommission:', error);
    res.status(500).json({ 
      error: 'Error del servidor al procesar la solicitud',
      details: error.message 
    });
  }
};

// Obtener todas las comisiones (solo para admin)
const getAllCommissions = async (req, res) => {
  try {
    const { status, type } = req.query;

    let query = supabase
      .from('commissions')
      .select('*')
      .order('created_at', { ascending: false });

    // Filtrar por estado si se proporciona
    if (status) {
      query = query.eq('status', status);
    }

    // Filtrar por tipo si se proporciona
    if (type) {
      query = query.eq('commission_type', type);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error al obtener comisiones:', error);
      return res.status(500).json({ 
        error: 'Error al obtener las comisiones',
        details: error.message 
      });
    }

    res.status(200).json({
      count: data.length,
      commissions: data
    });
  } catch (error) {
    console.error('Error en getAllCommissions:', error);
    res.status(500).json({ 
      error: 'Error del servidor',
      details: error.message 
    });
  }
};

// Obtener una comisión por ID
const getCommissionById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('commissions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ 
          error: 'Comisión no encontrada' 
        });
      }
      console.error('Error al obtener comisión:', error);
      return res.status(500).json({ 
        error: 'Error al obtener la comisión',
        details: error.message 
      });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error en getCommissionById:', error);
    res.status(500).json({ 
      error: 'Error del servidor',
      details: error.message 
    });
  }
};

// Actualizar estado de comisión (solo para admin)
const updateCommissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validación de estado
    const validStatuses = ['pending', 'in-progress', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ 
        error: 'Estado inválido' 
      });
    }

    const { data, error } = await supabase
      .from('commissions')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error al actualizar comisión:', error);
      return res.status(500).json({ 
        error: 'Error al actualizar la comisión',
        details: error.message 
      });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ 
        error: 'Comisión no encontrada' 
      });
    }

    res.status(200).json({
      message: 'Comisión actualizada exitosamente',
      commission: data[0]
    });
  } catch (error) {
    console.error('Error en updateCommissionStatus:', error);
    res.status(500).json({ 
      error: 'Error del servidor',
      details: error.message 
    });
  }
};

// Eliminar comisión (solo para admin)
const deleteCommission = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('commissions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error al eliminar comisión:', error);
      return res.status(500).json({ 
        error: 'Error al eliminar la comisión',
        details: error.message 
      });
    }

    res.status(200).json({
      message: 'Comisión eliminada exitosamente'
    });
  } catch (error) {
    console.error('Error en deleteCommission:', error);
    res.status(500).json({ 
      error: 'Error del servidor',
      details: error.message 
    });
  }
};

module.exports = {
  createCommission,
  getAllCommissions,
  getCommissionById,
  updateCommissionStatus,
  deleteCommission
};
