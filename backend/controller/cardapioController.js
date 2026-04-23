const Cardapio = require('../models/Cardapio');

exports.listarCardapio = async (req, res) => {

    const cardapio = await Cardapio.find();
    res.json(cardapio); 

}

exports.umCardapio = async (req, res) => {
    const cardapio = await Cardapio.findById(req.params.id);
    res.json(cardapio);
}

exports.criarCardapio = async (req, res) => {
    const cardapio = await Cardapio.create(req.body);
    res.status(201).json(cardapio);
}

exports.editarCardapio = async (req, res) => {
    const cardapio = await Cardapio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cardapio);
}

exports.deletarCardapio = async (req, res) => {
    const cardapio = await Cardapio.findByIdAndDelete(req.params.id);
    res.json({mensagem: 'Cardápio deletado com sucesso'});
}