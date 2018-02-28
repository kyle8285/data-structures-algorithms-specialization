const hugeFibonacci = (n,m) => {
  let fib1ModM = 0 % m;
  let fib2ModM = 1 % m;
  let count = [0,1];
  while (count.length >= 0) {
    const temp = fib1ModM;
    fib1ModM = fib2ModM;
    fib2ModM = (temp + fib2ModM) % m;
    // count++;
    count.push(fib2ModM);
    if (fib1ModM === 0 && fib2ModM === 1) {
      count.pop();
      count.pop();
      break;
    }
  }
  const newFib = n % count.length;
  return count[newFib];
}

const readline = require('readline')
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const readLine = line => {
  const a = parseInt(line.split(' ')[0], 10);
  const b = parseInt(line.split(' ')[1], 10);
  console.log(hugeFibonacci(a,b));
  process.exit();
};

rl.on('line', readLine);
