const OrderProduct = require('../models/orderProductModel');

// Aggiungi un prodotto a un ordine
exports.addProductToOrder = async (req, res) => {
  try {
    const { order_id, product_id, quantita } = req.body;
    const id = await OrderProduct.create(order_id, product_id, quantita);
    res.status(201).json({ message: 'Prodotto aggiunto all\'ordine', id });
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  }
};

// Visualizza i prodotti di un ordine
exports.getOrderDetails = async (req, res) => {
  try {
    const products = await OrderProduct.findByOrderId(req.params.order_id);
    res.status(200).json(products);
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  }
};

// Rimuovi un prodotto da un ordine
exports.deleteRemoveProduct = async (req, res) => {
  try {
    const { order_id, product_id } = req.params;
    const deleted = await OrderProduct.delete(order_id, product_id);
    if (deleted) {
      res.status(200).json({ message: 'Prodotto rimosso dall\'ordine' });
    } else {
      res.status(404).json({ message: 'Relazione non trovata' });
    }
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  }
};