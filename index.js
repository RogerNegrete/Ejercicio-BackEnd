const express = require('express');
const app = express();

// Ruta principal con más texto
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo! Este es un servidor creado con Node.js y Express. ¡Bienvenido a nuestra aplicación!');
});

// Iniciamos el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
