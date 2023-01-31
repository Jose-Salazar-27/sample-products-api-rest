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

const allowedFormats = {
  png: 'png',
  jpg: 'jpg',
  jpeg: 'jpeg',
  webp: 'webp',
};

const fileFilter = (request, file, callback) => {
  const extension = file.originalname.split('.').pop();

  if (extension !== allowedFormats[extension]) {
    callback(new Error(`${extension} isn't an allowd file format`), false);
  } else {
    callback(null, true);
  }
};

//I could use the key/value shorthand but I  prefer write it like this
const upload = multer({ storage: storage, fileFilter: fileFilter }).single('image-file');

const uploadMiddleWare = (request, response, next) => {
  upload(request, response, function (error) {
    if (error instanceof multer.MulterError) {
      next(error);
    } else if (error || !request.file) {
      next(error);
    }
    next();
  });
};
module.exports = { uploadMiddleWare };
