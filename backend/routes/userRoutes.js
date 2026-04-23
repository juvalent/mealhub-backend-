const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.listarUsers);
router.get('/:id', userController.umUser);
router.post('/', userController.criarUser);
router.put('/:id', userController.editarUser);
router.delete('/:id', userController.deletarUser);


module.exports = router;