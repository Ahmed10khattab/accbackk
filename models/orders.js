const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    //required: true,
  },
  Account: 
    {
     
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      //  required: true,
    }
     
    
 ,
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
   
  shippingAddress: {
    // You can customize this structure based on your requirements
    // address: { type: String, required: true },
    // city: { type: String, required: true },
    // state: { type: String, required: true },
    // zipCode: { type: String, required: true },
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  // Add other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
