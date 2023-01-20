const mongoose = require('mongoose');

const connectDB = () => {
  const URL = process.env.MONGODB_URI;
  mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, response) => {
      if (error) {
        console.log('Connection was failed');
      }
      console.log('Connection succesfulled');
    }
  );
};

module.exports = { connectDB };
