const express = require ('express');
const router = express.Router();
const diarioController = require('../controllers/cardapioController');

router.get('/', cardapioController.listarCardapio);
router.get('/:id', cardapioController.umCardapio);
router.post('/', cardapioController.criarCardapio);
router.put('/:id', cardapioController.editarCardapio);
router.delete('/:id', cardapioController.deletarCardapio);


module.exports = router;