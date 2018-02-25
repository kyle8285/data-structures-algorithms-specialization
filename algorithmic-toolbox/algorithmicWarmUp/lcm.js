// helper function
const gcdFast = (a,b) => {
  if (a % b === 0) {
    return b;
  }
  return gcdFast(b, a % b);
};

const lcm = (a,b) => {
  for (let i = 1; i <= a*b; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
  return a*b;
};

const lcmFast = (a,b) => {
  return (a/gcdFast(a,b))*b;
};

// STRESS TEST

// (function stressTest() {
//   while (true) {
//     const a = Math.floor(Math.random() * 10000) + 1;
//     const b = Math.floor(Math.random() * 10000) + 1;
//     console.log('computing lcm for ' + a + ' and ' + b);
//     const result1 = lcm(a,b);
//     const result2 = lcmFast(a,b);
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

const readLine = line => {
  const a = parseInt(line.split(' ')[0], 10);
  const b = parseInt(line.split(' ')[1], 10);
  console.log(lcmFast(a,b));
  process.exit();
};

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on('line', readLine);
