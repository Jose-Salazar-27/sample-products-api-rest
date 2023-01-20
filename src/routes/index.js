// const Express = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs');

function removeFileExtension(file) {
  return file.split('.')[0];
}

const PATH = __dirname;
// const dir = fs.readdirSync(PATH);

// dir.forEach(file => {
//   const route = removeFileExtension(file);
//   console.log(route);
//   console.log(file);
//   if (route !== 'index') {
//     // console.log(route);
//     // router.use(`/${route}`, require(`./${file}`));
//     router.use(`/${route}`, require(`./${file}`));
//     console.log(`${route} was loaded`);
//   }
// });

fs.readdirSync(PATH).filter(file => {
  const fileName = removeFileExtension(file);
  if (fileName !== 'index') {
    console.log(`Cargando la ruta ${fileName}`);
    router.use(`/${fileName}`, require(`./${file}`));
  }
});

module.exports = router;
