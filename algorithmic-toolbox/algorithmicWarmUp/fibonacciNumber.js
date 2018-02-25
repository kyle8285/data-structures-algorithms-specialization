const fibonacci = n => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciFast = n => {
  const arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n];
}

// STRESS TEST

// (function stressTest() {
//   for (let i = 0; i < 40; i++) {
//     console.log('computing fibonacci for ', i)
//     const result1 = fibonacci(i);
//     const result2 = fibonacciFast(i);
//     console.log('result1: ', result1);
//     console.log('result2: ', result2);
//     if (result1 !== result2) {
//       console.log('FAILED AT N = ' + i);
//       break;
//     }
//     console.log('OK');
//   }
// }());


const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const readLine = line => {
  if (line !== '\n') {
    const input = parseInt(line.trim(), 10);
    console.log(fibonacciFast(input));
    process.exit();
  }
};

rl.on('line', readLine);
