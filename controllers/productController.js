const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  try {
    const id = await Product.create(req.body.nome, req.body.prezzo);
    res.status(201).json({ message: 'Prodotto creato', id });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.update(req.params.id, req.body.nome, req.body.prezzo);
    updated ? res.json({ message: 'Aggiornato' }) : res.status(404).json({ message: 'Non trovato' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.delete(req.params.id);
    deleted ? res.json({ message: 'Eliminato' }) : res.status(404).json({ message: 'Non trovato' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        product ? res.json(product) : res.status(404).json({ message: 'Prodotto non trovato' });
    } catch (err) { res.status(500).json({ error: err.message }); }
};
