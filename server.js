const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderProductRoutes = require('./routes/orderProductRoutes');

app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Il server funziona!');
});

//my routes
app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);

app.use('/api/orders', orderRoutes);

app.use('/api/order-products', orderProductRoutes);

const PORT = 3005;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));