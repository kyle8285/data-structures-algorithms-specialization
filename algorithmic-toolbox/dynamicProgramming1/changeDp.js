const changeDp = n => {
  const change = [0];
    for (let j = 1; j <= n; j++) {
      let minCoins = Number.MAX_SAFE_INTEGER;
      minCoins = Math.min(minCoins, 1 + (change[j - 1]));
      if (j >= 3) minCoins = Math.min(minCoins, 1 + (change[j - 3]));
      if (j >= 4) minCoins = Math.min(minCoins, 1 + (change[j - 4]));
      change[j] = minCoins;
  }
  return change[n];
};

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const readLine = line => {
  const number = Number(line.split(' ')[0]);
  console.log(changeDp(number));
  process.exit();
};

rl.on('line', readLine);
