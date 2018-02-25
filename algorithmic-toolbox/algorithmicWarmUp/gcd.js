const gcd = (a,b) => {
  let greatest = 1;
  for (let i = 2; i <= Math.min(a,b); i++) {
    if (a % i === 0 && b % i === 0) {
      greatest = i;
    }
  }
  return greatest;
}

const gcdFast = (a,b) => {
  if (a % b === 0) {
    return b;
  }
  return gcdFast(b, a % b);
};

// STRESS TEST

// (function stressTest() {
//   while (true) {
//     const a = Math.floor(Math.random() * 10000000) + 1;
//     const b = Math.floor(Math.random() * 10000000) + 1;
//     console.log('computing gcd for ' + a + ' and ' + b);
//     const result1 = gcd(a,b);
//     const result2 = gcdFast(a,b);
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
  console.log(gcdFast(a,b));
  process.exit();
};

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on('line', readLine);
