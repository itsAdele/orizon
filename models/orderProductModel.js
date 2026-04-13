const db = require('../db');

const OrderProduct = {
  // Aggiunge un prodotto a un ordine
  create: async (order_id, product_id, quantita) => {
    const [result] = await db.query(
      'INSERT INTO order_products (order_id, product_id, quantita) VALUES (?, ?, ?)',
      [order_id, product_id, quantita]
    );
    return result.insertId;
  },

  // Trova tutti i prodotti di un ordine
  findByOrderId: async (order_id) => {
    const [rows] = await db.query(
      'SELECT p.*, op.quantita FROM products p JOIN order_products op ON p.id = op.product_id WHERE op.order_id = ?',
      [order_id]
    );
    return rows;
  },

  delete: async (order_id, product_id) => {
    const [result] = await db.query(
      'DELETE FROM order_products WHERE order_id = ? AND product_id = ?',
      [order_id, product_id]
    );
    return result.affectedRows > 0;
  }
};

module.exports = OrderProduct;