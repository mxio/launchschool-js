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
  return Number(amount) > 0 && amount.trim() !== '';
}

while (true) {
  let loanAmount = readline.question('Enter the loan amount\n');
  while (!greaterThanZero(loanAmount)) {
    loanAmount = readline.question('Please enter a valid loan amount of 0 or greater.\n');
  }

  let apr = readline.question('Enter the APR rate. If 5%, enter 5.\n');
  while (!greaterThanZero(apr)) {
    apr = readline.question('Enter a valid APR greater than 0.\n');
  }

  let durationInYears = readline.question('Enter the loan duration in years.\n');
  while (!greaterThanZero(durationInYears)) {
    durationInYears = readline.question('Please enter a loan duration greater than 0.\n');
  }

  let monthlyInterest = (Number(apr) / 100) / 12;
  let durationInMonths = Number(durationInYears) * 12;

  let monthlyPayment = Number(loanAmount) *
    (monthlyInterest /
      (1 - Math.pow((1 + monthlyInterest), (-durationInMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)} for ${durationInMonths} months.`);

  let startOver = readline.question('Would you like to do another calculation? Enter Y for Yes and N for No.\n').toLowerCase();

  while (startOver !== 'y' && startOver !== 'n') {
    startOver = readline.question('Please enter Y or N.\n');
  }

  if (startOver === 'n') {
    break;
  } else {
    console.clear();
  }
}
