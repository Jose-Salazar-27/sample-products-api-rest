const express = require('express');
const app = express();
const cors = require('cors');
const { connectDB } = require('./config/mongo.config');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../storage`));

app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
