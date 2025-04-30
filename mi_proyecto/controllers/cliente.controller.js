const { Cliente } = require('../models');
//Obtener todos los clientes 
exports.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
};
//Crear un nuevo cliente 
exports.crearCliente = async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
}; 
//Obtener un cliente por ID 
exports.obtenerClientePorId = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
      }
      res.json(cliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el cliente' });
    }
  };
//Actualizar un cliente 
exports.actualizarCliente = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
      }
      await cliente.update(req.body);
      res.json({ mensaje: 'Cliente actualizado', cliente });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
  };
//Eliminar un cliente 
exports.eliminarCliente = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado' });
      }
      await cliente.destroy();
      res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
  };