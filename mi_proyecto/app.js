const express = require('express');
const app = express();
const clienteRoutes = require('./routes/cliente.routes');
const pedidoRoutes = require('./routes/pedido.routes');
app.use(express.json());
app.use('/api', clienteRoutes);
app.use('/api', pedidoRoutes);
app.get('/', (req, res) => {
    res.send('API funcionando. Usa /api/clientes o /api/pedidos.');
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

module.exports = app;
