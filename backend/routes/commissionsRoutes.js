const express = require('express');
const router = express.Router();
const {
  createCommission,
  getAllCommissions,
  getCommissionById,
  updateCommissionStatus,
  deleteCommission
} = require('../controllers/commissionsController');

// Ruta pública: Crear nueva solicitud de comisión
router.post('/', createCommission);

// Rutas administrativas: Obtener, actualizar y eliminar comisiones
// TODO: Agregar middleware de autenticación para proteger estas rutas
router.get('/', getAllCommissions);
router.get('/:id', getCommissionById);
router.patch('/:id/status', updateCommissionStatus);
router.delete('/:id', deleteCommission);

module.exports = router;
