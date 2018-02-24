const maxPairwiseProduct = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result = Math.max(result, arr[i]*arr[j]);
    }
  }
  return result;
}

const maxPairwiseProductFast = arr => {
  let maxIndex = -1;
  let secondMaxIndex = -1;

  arr.forEach((num, index) => {
    if (maxIndex === -1 || num > arr[maxIndex]) {
      maxIndex = index;
    }
  });

  arr.forEach((num, index) => {
    if ((index !== maxIndex) && ((secondMaxIndex === -1) || num > arr[secondMaxIndex])) {
      secondMaxIndex = index;
    }
  });

  return arr[maxIndex] * arr[secondMaxIndex];
}

// STRESS TEST

// (function stressTest() {
//   while (true) {
//     const n = Math.floor(Math.random() * 50) + 2;
//     console.log(n + '\n');
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//       arr.push(Math.floor(Math.random() * 100));
//     }
//     console.log(arr.join(' ') + '\n');
//     const result1 = maxPairwiseProduct(arr);
//     const result2 = maxPairwiseProductFast(arr);
//     if (result1 !== result2) {
//       console.log(`WRONG ANSWER: ${result1} ${result2}\n`);
//       break;
//     } else {
//       console.log('OK\n');
//     }
//   }
// })();

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const input = [];
const readLine = line => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
    const n = input[0].split(' ')[0];
    const arr = input[1].split(' ').slice(0,n).map(Number);
    console.log(maxPairwiseProductFast(arr));
    process.exit();
  }
};

rl.on('line', readLine);
