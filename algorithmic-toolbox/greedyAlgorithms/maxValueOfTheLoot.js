const getBestItemIndex = (ppw, weights) => {
  let currentIndex = 0;
  let currentPpw = 0;
  for (let j = 0; j < ppw.length; j++) {
    if (weights[j] > 0 && ppw[j] > currentPpw) {
      currentPpw = ppw[j];
      currentIndex = j;
    }
  }
  return currentIndex;
};

const maxValueOfTheLoot = (capacity, prices, weights) => {
  let maxPrice = 0;
  // compute the price per weight
  const ppw = prices.map((price, index) => price/weights[index]);

  for (let i = 0; i < ppw.length; i++) {
    if (capacity === 0) return maxPrice;
    // find index(item) where ppw is max and weight > 0
    const index = getBestItemIndex(ppw, weights);
    const weightToTake = Math.min(capacity, weights[index]);
    maxPrice += weightToTake * ppw[index];
    capacity -= weightToTake;
    weights[index] -= weightToTake;
  }
  return maxPrice;
};

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

let numberOfCompounds, capacity;
const compounds = [];

const readLine = line => {
  if (numberOfCompounds === undefined && capacity === undefined) {
    [numberOfCompounds, capacity] = line.split(' ').map(Number);
  } else {
    compounds.push(line);
    if (compounds.length === numberOfCompounds) {
      const prices = compounds.map(compound => parseInt(compound.split(' ')[0], 10));
      const weights = compounds.map(compound => parseInt(compound.split(' ')[1], 10));
      console.log(maxValueOfTheLoot(capacity, prices, weights));
      process.exit();
    }
  }
};

rl.on('line', readLine);

