const Order = require('../models/orderModel');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createOrder = async (req, res) => {
  try {
    const { user_id, data_inserimento } = req.body;
    const id = await Order.create(user_id, data_inserimento);
    res.status(201).json({ message: 'Ordine creato', id });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.delete(req.params.id);
    deleted ? res.json({ message: 'Ordine eliminato' }) : res.status(404).json({ message: 'Ordine non trovato' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};