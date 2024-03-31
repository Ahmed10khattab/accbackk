const Orders = require('../models/orders');


const addOrders=async (req, res) => {
    try {
      const post = await Orders.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getAllOrders=
  async (req, res) => {
    try {
      const Orders = await Orders.find();
      res.status(200).json(Orders);
    } catch (error) {
      console.error('Error getting Orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

const  getOneOrders = async (req, res) => {
    try {
      const post = await Orders.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Orders not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      console.error('Error getting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const updateOrders=async (req, res) => {
    try {
      const post = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) {
        return res.status(404).json({ error: 'Orders not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  const deleteorder=async (req, res) => {
    try {
      const post = await Orders.findByIdAndDelete(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Orders not found' });
      }
      res.status(204).send(); // No content
    } catch (error) {
      console.error('Error deleting order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  module.exports={addOrders,deleteorder,getAllOrders,updateOrders,getOneOrders}
  