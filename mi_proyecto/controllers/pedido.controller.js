const { Pedido } = require('../models');
//Obtener todos los pedidos 
exports.obtenerPedidos = async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
};
//Crear un nuevo pedido 
exports.crearPedido = async (req, res) => {
    try {
        const { fecha, total, clienteId } = req.body;

        const fechaValida = fecha ? new Date(fecha) : new Date();
        if (isNaN(fechaValida)) {
            return res.status(400).json({ error: 'Fecha inválida' });
        }

        const pedido = await Pedido.create({
            fecha: fechaValida,
            total,
            clienteId,
        });

        res.status(201).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};
//Obtener un pedido por ID 
exports.obtenerPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
};
//Actualizar un pedido 
exports.actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }

        await pedido.update(req.body);
        res.json({ mensaje: 'Pedido actualizado', pedido });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el pedido' });
    }
};
//Eliminar un pedido 
exports.eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }

        await pedido.destroy();
        res.json({ mensaje: 'Pedido eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el pedido' });
    }
};