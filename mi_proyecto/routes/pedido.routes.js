const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido.controller');

router.get('/pedidos', pedidoController.obtenerPedidos);          
router.get('/pedidos/:id', pedidoController.obtenerPedidoPorId);
router.post('/pedidos', pedidoController.crearPedido);            
router.put('/pedidos/:id', pedidoController.actualizarPedido);
router.delete('/pedidos/:id', pedidoController.eliminarPedido);

module.exports = router;