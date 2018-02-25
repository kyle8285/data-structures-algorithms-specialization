const fibonacciLastDigit = n => {
  const arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n] % 10;
};

const fibonacciLastDigitFast = n => {
  const arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10;
  }
  return arr[n];
}

// STRESS TEST
// (function() {
//   while (true) {
//     const n = Math.floor(Math.random() * 50);
//     console.log('computing last fib number for N = ', n);
//     const result1 = fibonacciLastDigit(n);
//     const result2 = fibonacciLastDigitFast(n);
//     if (result1 !== result2) {
//       console.log('FAILED');
//       console.log('result1: ', result1);
//       console.log('result2: ', result2);
//       break;
//     }
//     console.log('OK');
//   }
// })();

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const readLine = line => {
  if (line !== '\n') {
    const input = parseInt(line.trim(), 10);
    console.log(fibonacciLastDigitFast(input));
    process.exit();
  }
};

rl.on('line', readLine);
