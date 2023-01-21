const userCollection = require('../models/user.model');

const getUsers = async (request, response) => {
  try {
    const data = await userCollection.find({});
    response.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (request, response) => {
  try {
    const { id } = request.params;
    const data = await userCollection.findById(id);
    response.send({ payload: data });
  } catch (error) {
    console.log(error);
    response.send({ error });
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

const updateUser = async (request, response) => {
  try {
    const { body } = request;
    const { id } = request.params;
    console.log({ id, body });

    const data = await userCollection.updateOne({ _id: id }, body);

    response.send({ payload: data });
  } catch (error) {
    console.log(error);
    response.send({ error });
  }
};

const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const { password } = request.body;
    const user = await userCollection.findById(id);

    if (password === user.password) {
      const deletedUser = await userCollection.deleteOne({ _id: id });
      response.send({ payload: deletedUser });
    } else {
      response.send({ error: 'ERROR_IN_PASSWORD' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };
