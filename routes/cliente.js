var express = require('express');
var router = express.Router();
const controlador = require('../controllers/controlador');

// Obtener modelo Cliente.
const Cliente = require('../models/index').Cliente;

// Muestra una lista con todos los clientes.
router.get('/', (req, res) => controlador.listar(req, res, Cliente));

router.get('/contar', (req, res) => controlador.contar(req, res, Cliente))

// Realiza una consulta a la tabla Cliente y retorna los resultados.
router.get('/search', (req, res) => controlador.buscarClientes(req, res));

router.get('/:id', (req, res) => controlador.getById(req, res, Cliente));


// Crea un Cliente.
router.post('/', (req, res) => {
    // Parsear rut solo si fue ingresado.
    if (req.body.rut)
        req.body.rut = req.body.rut.replace(/\./g, '')
            .replace(/-/g, '').toLowerCase();;

    // El modelo se encarga de validar el rut.
    controlador.crear(req, res, Cliente);
});

//Elimina un Cliente
router.delete('/:id', (req, res) => controlador.eliminar(req, res, Cliente));


// Actualiza un Cliente.
router.put('/', (req, res) => controlador.actualizar(req, res, Cliente))


// Exportar el router.
module.exports = router;