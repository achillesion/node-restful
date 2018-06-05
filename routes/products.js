// using expressRouter() fucntion methods GET POST for Products routes
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../models/product')

// router.method(filter,function), This method is returing an JSON object with a value of message!
// GET Products
router.get('/',(req, res, next)=>{
   Product.find()
   .exec()
   .then(doc=>{
       console.log(doc)
       res.status(200).json(doc)
   })
   .catch(err =>{
       console.log(err)
       res.status(500).json({
           error: err
       })
   })
})

// POST Products
router.post('/',(req, res, next)=>{
      
        const product = new Product({
            _id:new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })

        product
        .save()
        .then(result =>{
            console.log(result)
            res.status(201).json({
                message: 'Handling POST requests for /products',
                createdProduct: product
        })
        .catch(err =>{
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
    
    })
})

// GET Products by ID
router.get('/:productId',(req, res, next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log("From database"+doc)
        if(doc){
            res.status(200).json(doc)
        }else{
            res.status(404).json({message: 'No valid entry found for provided ID'});
        }
        
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: err})

    })
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