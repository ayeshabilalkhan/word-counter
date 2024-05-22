#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import * as emoji from "node-emoji";

console.log(chalk.bold.greenBright("\n \t- ------< Welcome to the Word Counter! >------ -"));
console.log(chalk.bold.greenBright("_".repeat(66)));
console.log(chalk.bold.yellowBright("=".repeat(66)));


async function main() {
    let answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: chalk.bold.blueBright("Enter a Sentence")
        }
    ]);


    // Splitting the sentence into words and counting them..
    let words = answers.sentence.trim().split(" ");

    console.log(chalk.bold.yellowBright("=".repeat(66)));
    console.log(chalk.bold.blueBright("- Sentence Words:"));
    console.log(words);
    console.log(chalk.bold.blueBright(`\n- Word Count: ${words.length}`));


       // Counting letters
    let letterWithoutSpace = answers.sentence.replace(/\s/g, "");
    let letterCount = letterWithoutSpace.length;
    console.log(chalk.bold.blueBright(`- Total letters: ${letterCount}`));

    console.log(chalk.bold.yellowBright("=".repeat(66)));

       // Printing a message with an emoji..
    console.log(chalk.bold.hex("#FF00FF")(emoji.emojify("\n\t ✨- ------< Thanks for using! >------ -✨")));

}

main();
