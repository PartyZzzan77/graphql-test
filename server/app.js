const express = require('express');
const chalk = require('chalk');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('../Schema/schema.js');
const { db } = require('../models/movie.js');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;
const highlightedError = chalk.bgRed.white;
const highlightedSuccess = chalk.bgGreen.whiteBright;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => {
    console.log(highlightedError(`Connection error: ${err.message}`));
});
db.once('open', () => {
    console.log(highlightedSuccess('Connected to DB'));
});

app.listen(PORT, (err) => {
    err
        ? console.log(highlightedError(err.message))
        : console.log(highlightedSuccess(`Server start at ${PORT}`));
});
