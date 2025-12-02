import { supabase } from '../config/supabase.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Nombre, email y mensaje son requeridos',
      });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Formato de email inválido',
      });
    }

    // Insertar mensaje en la tabla messages
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, subject, message }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ 
      success: true, 
      data, 
      message: 'Mensaje enviado exitosamente' 
    });
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje',
      error: error.message 
    });
  }
};

// Opcional: Para ver los mensajes recibidos (proteger con autenticación en producción)
export const getContacts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
