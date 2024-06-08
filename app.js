#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//displayoing welcome message
console.log(chalk.bold.yellow((`\n  \t\t <<<================================================>>>`)));
console.log(chalk.bold.blue(`<<<=========>>>  ${chalk.blueBright.bold('Welcome To \'Hafeez Siddiqui\' - CLI Simple Calculator')}  <<<=========>>>`));
console.log(chalk.bold.yellow(`\t\t <<<===============================================>>>\n`));
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: `UserGuessedNumber`,
        type: `number`,
        message: (chalk.bold.magentaBright(`\nEnter Any Number Between 1 to 5`))
    }
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log(chalk.bold.greenBright(`\nCongratulations! You Guessed The Correct Number.`));
}
else {
    console.log(chalk.bold.redBright(`OOPS! You Guessed The Wrong Number.`));
}
