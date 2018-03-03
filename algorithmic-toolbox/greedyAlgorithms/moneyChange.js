// denominations are 1, 5, 10
const moneyChange = money => {
  let coins = 0;
  while (money > 0) {
    if (money >= 10) {
      money -= 10;
    } else if (money >= 5) {
      money -=5;
    } else {
      money -= 1;
    }
    coins += 1;
  }
  return coins;
};

const moneyChangeFast = money => {
  return Math.floor(money / 10) + Math.floor((money % 10) / 5)  + money % 5;
};

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const readLine = line => {
  const input = parseInt(line.split(' ')[0], 10);
  console.log(moneyChangeFast(input));
  process.exit();
};

rl.on('line', readLine);
