// using expressRouter() fucntion methods GET POST for Products routes
const express = require('express');
const router = express.Router();

// router.method(filter,function), This method is returing an JSON object with a value of message!
// GET Products
router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests for /products'
    })
})

// POST Products
router.post('/',(req, res, next)=>{
    res.status(201).json({
        message: 'Handling POST requests for /products'
    })
})

// GET Products by ID
router.get('/:productId',(req, res, next)=>{
    const id = req.params.productId;
    if(id === 'speacial'){
        res.status(200).json({
            message: "You discovered speacial ID",
            id: id
        })
    }
    else{
        res.status(200).json({
            message: 'I dont think this product exits! Hence you passed an ID',
            id: req.param.productId
        })
    }
})
// Patch Products by ID
router.patch('/:productId',(req, res, next)=>{
    res.status(200).json({
        message: 'Product has been successfully updated!'
    })
})
// DELETE Products by ID
router.delete('/:productId',(req, res, next)=>{
    res.status(200).json({
        message: 'Product has been successfully deleted!'
    })
})

module.exports = router;