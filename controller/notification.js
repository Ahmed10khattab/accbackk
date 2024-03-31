const Notification = require('../models/notification');


const addnotification=async (req, res) => {
    try {
      const notification = await Notification.create(req.body);
      res.status(201).json(notification);
    } catch (error) {
      console.error('Error creating notification:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const getAllNotification=
  async (req, res) => {
    try {
      const notifications = await Notification.find();
      res.status(200).json(notifications);
    } catch (error) {
      console.error('Error getting notifications:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const  getOneNotification = async (req, res) => {
    try {
      const notification = await Notification.findById(req.params.id);
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found' });
      }
      res.status(200).json(notification);
    } catch (error) {
      console.error('Error getting notification:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const updateNOTification=async (req, res) => {
    try {
      const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found' });
      }
      res.status(200).json(notification);
    } catch (error) {
      console.error('Error updating notification:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  const deletenotification=async (req, res) => {
    try {
      const notification = await Notification.findByIdAndDelete(req.params.id);
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found' });
      }
      res.status(204).send(); // No content
    } catch (error) {
      console.error('Error deleting notification:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


//   const sendNotification=import {initializeApp, applicationDefault } from 'firebase-admin/app';
//   import { getMessaging } from "firebase-admin/messaging";
//   import express, { json } from "express";
//   import cors from "cors";
  
  
//   process.env.GOOGLE_APPLICATION_CREDENTIALS;
  
//   const app = express();
//   app.use(express.json());
  
//   app.use(
//     cors({
//       origin: "*",
//     })
//   );
  
//   app.use(
//     cors({
//       methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
//     })
//   );
  
//   app.use(function(req, res, next) {
//     res.setHeader("Content-Type", "application/json");
//     next();
//   });
  
  
//   initializeApp({
//     credential: applicationDefault(),
//     projectId: 'potion-for-creators',
//   });
  
//   app.post("/send", function (req, res) {
//     const receivedToken = req.body.fcmToken;
    
//     const message = {
//       notification: {
//         title: "Notif",
//         body: 'This is a Test Notification'
//       },
//       token: "fYpIKMzgRXStZJb_JJ3H_0:APA91bGJnhHhLoZsh2IcWWILZlkNlA-1eAFV-vU1Mpt8VVH6K61yd_fbkgNQAC27yzcuJVfU2v43r22KSMFy8Z3fz_HSbjNUxOHGWbMQF2xS5V3zrH_caLcSC-_Icv_Zv1E3K4BDxfra",
//     };
    
//     getMessaging()
//       .send(message)
//       .then((response) => {
//         res.status(200).json({
//           message: "Successfully sent message",
//           token: receivedToken,
//         });
//         console.log("Successfully sent message:", response);
//       })
//       .catch((error) => {
//         res.status(400);
//         res.send(error);
//         console.log("Error sending message:", error);
//       });
    
    
//   });
  
  
  
  
  


  module.exports={addnotification,deletenotification,getAllNotification,updateNOTification,getOneNotification}
  