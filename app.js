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

app.use((req,res,next)=>{
//    create an error object
    const error =  new Error("Not found")
//  set up error.status to error code 
    error.status(404) 
// pass the error to next
    next(error)
    })

app.use((error, req, res, next)=>{
    // show error staus in responce
    res.status(error.status||500)
    // show error message in json responce
    res.json({
        error:{
            message: error.message
        }
    })
})

//Module exports to get file in server.js
module.exports = app;