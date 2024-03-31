
const express = require('express');
const router = express.Router();
 const { addnotification, getAllNotification, getOneNotification, updateNOTification,deletenotification } = require('../controller/notification');

router.post('/addnotification',addnotification )
router.get('/getAllNotification/',getAllNotification  )
router.get('/getOneNotification/:id',getOneNotification);
router.put('/updateNOTification/:id',updateNOTification );
router.delete('/deletenotification/:id', deletenotification );

module.exports = router;
