const express = require('express');
const route = express.Router();
const {UpdateProfile} = require('../controllers/controllerupdateProfile');
const upload = require('../middleware/multer');
route.put('/api/updateprofile/:id',upload.single('Image'),UpdateProfile);
module.exports = route;