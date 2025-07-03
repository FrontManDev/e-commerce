const express = require('express');
const upload = require('../middleware/multer');
const {Registration} = require('../controllers/controllerregistration');
const route = express.Router();
module.exports = route.post('/api/registration',upload.single('Image'),Registration)