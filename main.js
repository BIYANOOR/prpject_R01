#!/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
while (true) {
    const randomNumber = Math.floor(Math.random() * 10);
    const answers = await inquirer.prompt([
        {
            name: "userGuedsNumber",
            type: "number",
            message: "Are you ready to play ! please guess a number of your choice"
        }
    ]);
    if (answers.userGuedsNumber === randomNumber) {
        // ASCII art for "Waooo"
        const asciiArt = `
__        ___           ___   __ 
\\ \\      / / \\     / _ \\// _\\ 
 \\ \\ /\\ / / _ \\  | | | | | | |
  \\ V  V / ___ \ \\ | |_| | |_| |
   \\_/\\_/_/   \\_\\\\___/ \\___/ 
`;
        // Function to apply random colors to each character
        const applyRandomColors = (text) => {
            const colors = [
                chalk.red,
                chalk.green,
                chalk.yellow,
                chalk.blue,
                chalk.magenta,
                chalk.cyan,
                chalk.white,
            ];
            return text
                .split('')
                .map(char => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                return color(char);
            })
                .join('');
        };
        // Apply random colors to the ASCII art
        const coloredAsciiArt = applyRandomColors(asciiArt);
        // Log the colored ASCII art to the console
        console.log(coloredAsciiArt);
        console.log("🎇🎇Congratulation you guessed a right number🎇🎇");
    }
    else {
        console.log("😞😞  OH You Failed to guess the right number😞😞  best of luck try again😞😞");
    }
    ;
    console.log("LETS PLAY AGAIN");
}
