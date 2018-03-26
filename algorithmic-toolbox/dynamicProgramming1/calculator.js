const greedyCalculator = num => {
  let steps = 0;
  let currentNum = 1;
  const intermediateNums = [currentNum];
  while (currentNum < num) {
    if (currentNum <= num/3) {
      currentNum = currentNum * 3;
    } else if (currentNum <= num/2) {
      currentNum = currentNum * 2;
    } else {
      currentNum = currentNum + 1;
    }
    intermediateNums.push(currentNum);
    steps++;
  }
  return [steps, intermediateNums];
};

const calculator = num => {
  const steps = [0,0];

  for (let i = 2; i <= num; i++) {
    const add = steps[i-1] + 1;
    let minSteps = add;
    if (i%3 === 0) {
      minSteps = Math.min(minSteps, steps[i/3]+1);
    }
    if (i%2 === 0) {
      minSteps = Math.min(minSteps, steps[i/2]+1);
    }
    steps[i] = minSteps;
  }
  console.log(steps[num]);

  const intermediateValues = [num];
  let intermediateValue = num;

  while (intermediateValue > 1) {
    if (intermediateValue % 3 === 0) {
      if (steps[intermediateValue/3] === steps[intermediateValue]-1) {
        intermediateValue = intermediateValue/3;
        intermediateValues.unshift(intermediateValue);
      } else {
        intermediateValue = intermediateValue - 1;
        intermediateValues.unshift(intermediateValue);
      }
    } else if (intermediateValue % 2 === 0) {
      if (steps[intermediateValue/2] === steps[intermediateValue]-1) {
        intermediateValue = intermediateValue/2;
        intermediateValues.unshift(intermediateValue);
      } else {
        intermediateValue = intermediateValue - 1;
        intermediateValues.unshift(intermediateValue);
      }
    } else {
      intermediateValue = intermediateValue - 1;
      intermediateValues.unshift(intermediateValue);
    }
  }
  console.log(intermediateValues.join(' '));
};

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const readLine = line => {
  const number = Number(line);
  calculator(number);
  process.exit();
};

rl.on('line', readLine);
