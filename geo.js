const { spherev, torusv } = require('./vol')
const chalk = require('chalk')

console.log(chalk.yellow(torusv(4, 3)));

console.log(chalk.bgBlue(chalk.black(spherev(1))));
