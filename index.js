const express = require('express');
const app = express();
const { connect } = require('./Src/Config/DBConnection');
const mongoose = require('mongoose');
const userRoutes = require('./Src/routes/UserRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const teamRoutes = require('./Src/routes/TeamRoutes');

connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', userRoutes);
app.use('/api/v2', teamRoutes);

const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
