const cloudinary = require('cloudinary').v2;
const cloudinaryConfig = require('../config/cloudinary.config');

const uploadProduct = async assetPath => {
  cloudinaryConfig();

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
    folder: 'products',
  };

  try {
    const result = await cloudinary.uploader.upload(assetPath, options);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = uploadProduct;
