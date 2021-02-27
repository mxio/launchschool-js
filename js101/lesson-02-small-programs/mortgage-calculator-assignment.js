// GET loan amount
// Check if loan amount is valid (greater than 0)
// GET APR as X and not decimal
// Check if APR is valid (greater than 0)
// GET loan duration in years, integer only
// Check if loan duration is valid
// Convert APR to monthly interest
// Convert loan duration years to months
// Monthly payment = loan amount *
//                   (monthly interest /
//                   (1 - Math.pow((1 + monthly interest), (-months))));
// Print monthly payment as dollars and cents
// Prompt if user wants to do another calculation

console.log('Welcome to the Mortgage Calculator!');

let readline = require('readline-sync');

function greaterThanZero(amount) {
  return amount > 0;
}

while (true) {
  let loanAmount = Number(readline.question('Enter the loan amount\n'));

  if (!greaterThanZero(loanAmount)) {
    loanAmount = Number(readline.question('Please enter a valid loan amount of 0 or greater.\n'));
  }

  let apr = Number(readline.question('Enter the APR rate. If 5%, enter 5.\n'));

  if (!greaterThanZero(apr)) {
    apr = Number(readline.question('Enter a valid APR greater than 0.\n'));
  }

  let durationInYears = Number(readline.question('Enter the loan duration in years.\n'));

  if (!greaterThanZero(durationInYears)) {
    durationInYears = Number(readline.question('Please enter a loan duration greater than 0.\n'));
  }

  let monthlyInterest = (apr / 100) / 12;
  let durationInMonths = durationInYears * 12;

  let monthlyPayment = loanAmount *
    (monthlyInterest /
      (1 - Math.pow((1 + monthlyInterest), (-durationInMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)} for ${durationInMonths} months.`);

  let startOver = readline.question('Would you like to do another calculation? Enter Y for Yes and N for No.\n');

  while (startOver !== 'Y' && startOver !== 'N') {
    startOver = readline.question('Please enter Y or N.\n');
  }

  if (startOver === 'N') {
    break;
  }
}
