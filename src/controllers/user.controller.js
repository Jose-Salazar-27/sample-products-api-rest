const userCollection = require('../models/user.model');

const getUsers = async (request, response) => {
  try {
    const data = await userCollection.find({});
    response.send(data);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (request, response) => {
  try {
    const { body } = request;
    const data = await userCollection.create(body);

    response.send({ payload: data });
  } catch (error) {
    console.log(error);
    response.send({ error });
  }
};

module.exports = { getUsers, createUser };
