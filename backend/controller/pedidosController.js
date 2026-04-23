const Pedidos = require('../models/Pedidos');

exports.listarPedidos = async (req, res) => {

    const pedidos = await Pedidos.find();
    res.json(pedidos); 

}

exports.umPedido = async (req, res) => {
    const pedido = await Pedidos.findById(req.params.id);
    res.json(pedido);
}

exports.criarPedido = async (req, res) => {
    const pedido = await Pedidos.create(req.body);
    res.status(201).json(pedido);
}

exports.editarPedido = async (req, res) => {
    const pedido = await Pedidos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pedido);
}

exports.deletarPedido = async (req, res) => {
    const pedido = await Pedidos.findByIdAndDelete(req.params.id);
    res.json({mensagem: 'Pedido deletado com sucesso'});
}