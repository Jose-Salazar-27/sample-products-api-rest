const multer = require('multer');

const storagePath = `${__dirname}/../../storage`;

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, storagePath);
  },
  filename: (request, file, callback) => {
    const extension = file.originalname.split('.').pop();
    const fileName = `file-${Date.now()}.${extension}`;
    callback(null, fileName);
  },
});

//I could use the key/value shorthand but I  prefer write it like this
const uploadMiddleWare = multer({ storage: storage });

module.exports = { uploadMiddleWare };
