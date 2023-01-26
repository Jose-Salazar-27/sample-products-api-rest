const fs = require('fs');

const deleteFromDisk = (path, fileName) => {
  fs.readdirSync(path).forEach(file => {
    if (file === fileName) {
      console.log(`deleting file: ${file}`);
      fs.unlink(`${path}/${fileName}`, function (error) {
        if (error) {
          console.warn(error);
          throw error;
        }
        console.log(`${file} file was be delete`);
      });
    }
  });
};

module.exports = deleteFromDisk;
