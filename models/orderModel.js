const db = require('../db');

const Order = {
  // CREATE
  create: async (user_id, data_inserimento) => {
    const [result] = await db.query(
      'INSERT INTO orders (user_id, data_inserimento) VALUES (?, ?)', 
      [user_id, data_inserimento]
    );
    return result.insertId;
  },

  // READ 
  findAll: async (data, prodottoId) => {
    // Selezioniamo i dati dell'ordine + i dati dell'utente con una JOIN
    let query = `
      SELECT o.id, o.data_inserimento, u.nome, u.cognome, u.email 
      FROM orders o 
      JOIN users u ON o.user_id = u.id 
      WHERE 1=1`;
    
    const params = [];

    // Filtro per data 
    if (data) {
      query += ' AND DATE(o.data_inserimento) = ?';
      params.push(data);
    }

    // Filtro per prodotto contenuto 
    if (prodottoId) {
      query += ' AND o.id IN (SELECT order_id FROM order_products WHERE product_id = ?)';
      params.push(prodottoId);
    }

    const [rows] = await db.query(query, params);
    return rows;
  },

  // READ uno solo
  findById: async (id) => {
    const query = `
      SELECT o.*, u.nome, u.cognome 
      FROM orders o 
      JOIN users u ON o.user_id = u.id 
      WHERE o.id = ?`;
    const [rows] = await db.query(query, [id]);
    return rows[0];
  },

  // DELETE
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM orders WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = Order;