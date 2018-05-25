const express =  require('express');
const app = express();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const morgan =  require('morgan');

app.use(morgan('dev'))
// For Products route
app.use('/products', productRoutes);
// For Orders route
app.use('/orders', orderRoutes);

//Module exports to get file in server.js
module.exports = app;