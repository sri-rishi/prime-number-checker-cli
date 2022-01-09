const readlineSync = require("readline-sync");
const chalk = require("chalk");

const userName = readlineSync.question(chalk.red("Please! Enter your name- "));

console.log(`Welcome ${userName}`);
console.log(chalk.cyan("Is your birthdate is a prime Number?"));
let score = 0;
function primeNumber(question) {
  const userNumber = readlineSync.question(question);
  
  if(isNaN(userNumber)) {
    console.log(chalk.bgRed("Error you have entered wrong type"));
  }else{
    for (var i = 2;i<userNumber;i++) {
      if(userNumber % i === 0) {
        score = score + 1;
      }
    }
    if(score  === 0) {
      console.log(chalk.yellowBright("Your birthdate is a prime number"));
    } else {
      console.log(chalk.blue("Sorry! Not a prime number"));
    }
  }
}

primeNumber(chalk.magenta("Enter your birthdate- "));
