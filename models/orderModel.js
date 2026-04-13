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

  // READ (Tutti)
  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM orders');
    return rows;
  },

  // READ (Uno solo x ID)
  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows[0];
  },

  // DELETE
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM orders WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = Order;