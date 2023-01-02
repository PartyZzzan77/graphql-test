const express = require('express');
const chalk = require('chalk');
const graphqlHTTP = require('express-graphql');

const PORT = 3000;

const app = express();

app.use('/graphql', graphqlHTTP({}));

app.listen(PORT, (err) => {
    err
        ? console.log(chalk.bgRed(err.message))
        : console.log(chalk.bgGreen.whiteBright(`Server start at ${PORT}`));
});
