const express = require('express');
const chalk = require('chalk');
const graphqlHTTP = require('express-graphql');
const schema = require('../Schema/schema.js');

const PORT = 3000;
const highlightedError = chalk.bgRed.white;
const highlightedSuccess = chalk.bgGreen.whiteBright;

const app = express();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, (err) => {
    err
        ? console.log(highlightedError(err.message))
        : console.log(highlightedSuccess(`Server start at ${PORT}`));
});
