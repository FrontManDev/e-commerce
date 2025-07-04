const express = require('express');
const upload = require('../middleware/multer');
const {Registration} = require('../controllers/controllerregistration');
const route = express.Router();
route.post('/api/registration',upload.single('Image'),Registration);
module.exports = route;