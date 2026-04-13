const db = require('../db');

const Product = {
  // CREATE
  create: async (nome, prezzo) => {
    const [result] = await db.query('INSERT INTO products (nome, prezzo) VALUES (?, ?)', [nome, prezzo]);
    return result.insertId;
  },

  // READ (Tutti)
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
  },

  // READ (Uno solo per ID)
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  },

  // UPDATE
  update: async (id, nome, prezzo) => {
    const [result] = await db.query('UPDATE products SET nome = ?, prezzo = ? WHERE id = ?', [nome, prezzo, id]);
    return result.affectedRows > 0;
  },

  // DELETE
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = Product;