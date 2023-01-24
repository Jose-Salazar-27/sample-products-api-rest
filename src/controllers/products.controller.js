const ProductsCollection = require('../models/product.model');
const uploadProduct = require('../utilities/upload-file-cloudinary.utilitie');
const deleteFromDisk = require('../utilities/delete-from-disk.utilitie');

const getAllItems = async (request, response) => {
  try {
    const data = await ProductsCollection.find({});
    response.send({ payload: data });
  } catch (error) {
    console.log(error);
    response.send({ error });
  }
};

const getItemById = async (request, response) => {
  const { id } = request.params;

  try {
    const data = await ProductsCollection.findById(id);
    response.send({ payload: data });
  } catch (error) {
    console.log(error);
    response.send({ error });
  }
};

const createItem = async (request, response) => {
  try {
    const { body, file } = request;
    const { title, description, price, discountRate, brand, category } = body;
    const { filename } = file;
    const data = await uploadProduct(file.path);
    const { secure_url } = data;

    const NewProduct = new ProductsCollection({
      title,
      price,
      description,
      category,
      brand,
      images: [secure_url],
    });

    const createItemResult = await ProductsCollection.create(NewProduct);
    response.status(201).send({ payload: createItemResult });

    const StorageDir = `${__dirname}/../../storage`;
    deleteFromDisk(StorageDir, filename);
  } catch (error) {
    console.log(error);
  }
};

const updateItem = async (request, response) => {
  const { id } = request.params;
  const { body } = request.body;

  try {
    const data = ProductsCollection.findByIdAndUpdate(id, body);
    response.status(201).send({ payload: data });
  } catch (error) {
    console.log(error);
    response.status(400).send({ error });
  }
};

module.exports = { getAllItems, getItemById, createItem, updateItem };
