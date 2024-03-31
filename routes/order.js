
const express = require('express');
const router = express.Router();
 const { addOrders,deleteorder,getAllOrders,updateOrders,getOneOrders } = require('../controller/order');

router.post('/addorder',addOrders )
router.get('/getAllorder/',getAllOrders )
router.get('/getOneorder/:id',getOneOrders);
router.put('/updateorder/:id',updateOrders );
router.delete('/deleteorder/:id',deleteorder );

module.exports = router;
