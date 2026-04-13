const db = require('../db');

const User = {
  // CREATE
  create: async (nome, cognome, email) => {
    const [result] = await db.query('INSERT INTO users (nome, cognome, email) VALUES (?, ?, ?)', [nome, cognome, email]);
    return result.insertId;
  },

  // READ (Tutti)
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  },

  // READ (Uno solo per ID)
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  // UPDATE
  update: async (id, nome, cognome, email) => {
    const [result] = await db.query('UPDATE users SET nome = ?, cognome = ?, email = ? WHERE id = ?', [nome, cognome, email, id]);
    return result.affectedRows > 0;
  },

  // DELETE
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = User;