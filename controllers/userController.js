const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user ? res.json(user) : res.status(404).json({ message: 'Utente non trovato' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createUser = async (req, res) => {
  try {
    const { nome, cognome, email } = req.body;
    const id = await User.create(nome, cognome, email);
    res.status(201).json({ message: 'Utente creato', id });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.updateUser = async (req, res) => {
  try {
    const { nome, cognome, email } = req.body;
    const updated = await User.update(req.params.id, nome, cognome, email);
    updated ? res.json({ message: 'Utente aggiornato' }) : res.status(404).json({ message: 'Utente non trovato' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.delete(req.params.id);
    deleted ? res.json({ message: 'Utente eliminato' }) : res.status(404).json({ message: 'Utente non trovato' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};