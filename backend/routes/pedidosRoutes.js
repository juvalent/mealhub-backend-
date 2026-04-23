const express = require ('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

router.get('/', pedidosController.listarPedidos);
router.get('/:id', pedidosController.umPedido);
router.post('/', pedidosController.criarPedido);
router.put('/:id', pedidosController.editarPedido);
router.delete('/:id', pedidosController.deletarPedido);


module.exports = router;