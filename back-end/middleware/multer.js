const multer = require('multer');
const upload = multer({ dest: 'ProfileImages/' });
module.exports = upload;