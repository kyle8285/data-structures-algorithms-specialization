const largestNumber = numbers => {
  const isBetter = (curr, max) => {
    // ensure we have strings
    curr = String(curr);
    max = String(max);
    if (Number(curr + max) > Number(max + curr)) {
      return true;
    }
    return false;
  }

  let largest = '';
  while (numbers.length) {
    let currentMaxIndex = 0
    let currentMax = numbers[currentMaxIndex];
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (isBetter(number, currentMax)) {
        currentMax = number;
        currentMaxIndex = i;
      }
    }

    largest += currentMax;
    numbers.splice(currentMaxIndex, 1);
  }

  return largest;
}

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const input = [];
const readLine = line => {
  input.push(line);
  if (input.length === 2) {
    const n = Number(input[0]);
    const numbers = input[1].split(' ');
    console.log(largestNumber(numbers));
    process.exit();
  }
};

rl.on('line', readLine);

