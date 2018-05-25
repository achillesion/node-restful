const express = require('express')
const router = express.Router()

// GET orders
router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Order are fetched!'
    })
})

// POST orders
router.post('/',(req, res, next)=>{
    res.status(201).json({
        message: 'Order are created!'
    })
})

// GET orders by ID
router.get('/:orderId',(req, res, next)=>{
    res.status(201).json({
        message: 'Order details',
        id: req.params.orderId
    });
})

// POST orders by ID
router.post('/:orderId',(req, res, next)=>{
    res.status(201).json({
        message: 'Order is created!',
        id: req.params.orderId
    });
});

router.delete('/:orderId',(req, res, next)=>{
    res.status(201).json({
        message: 'Order deleted details',
        id: req.params.orderId
    });
})

module.exports = router;