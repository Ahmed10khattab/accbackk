// models/Notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    
  sender: { type: mongoose.Schema.Types.ObjectId,
     ref: 'User', 
  required: true 
},
  recipient: { type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
   required: true
 },
  type: { type: String, 
    required: true
 }, // e.g., 'like', 'comment', 'friend_request'
  content: { type: String },
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
 });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
