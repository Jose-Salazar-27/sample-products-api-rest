const express = require('express');
const app = express();
const cors = require('cors');
const { connectDB } = require('./config/mongo.config');
const { ErrorHandlerMiddleware } = require('./middlewares/error-handler.mid');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../storage`));

// Dynamic routes load
app.use('/api', require('./routes'));

// Error handler middleware
app.use(ErrorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
