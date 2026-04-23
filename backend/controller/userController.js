const User = require('../models/User');

exports.listarUsers= async (req, res) => {

    const users = await User.find();
    res.json(users); 

}

exports.umUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

exports.criarUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
}

exports.editarUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
}

exports.deletarUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({mensagem: 'Usuário deletado com sucesso'});
}