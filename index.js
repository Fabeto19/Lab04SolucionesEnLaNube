const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

app.get('/clientes', (req, res) => {
    const clientes = [
        { id: 1, nombre: 'Fabricio', apellido: 'Polanco' },
        { id: 2, nombre: 'Juanito', apellido: 'Alimaña' },
        { id: 3, nombre: 'Franklin', apellido: 'Dias' },
    ];
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Gaseosa', precio: 30 },
        { id: 2, nombre: 'Galleta', precio: 20 },
        { id: 3, nombre: 'Caramelo', precio: 10 },
    ];
    res.json(productos);
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
