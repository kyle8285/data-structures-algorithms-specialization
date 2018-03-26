const lcs2 = (seq1, seq2) => {
  const table = [];

  for (let m = 0; m <= seq1.length; m++) {
    table[m] = new Array(seq2.length+1).fill(0);
  }

  for (let i = 1; i <= seq1.length; i++) {
    for (let j = 1; j <= seq2.length; j++) {
      if (seq1[i-1] === seq2[j-1]) {
        table[i][j] = table[i-1][j-1] + 1;
      } else {
        table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
      }
    }
  }
  console.log(table[seq1.length][seq2.length]);
};

const readline = require('readline');
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const input = [];

const readLine = line => {
  input.push(line);
  if (input.length === 4) {
    const sequence1 = input[1].split(' ').map(Number);
    const sequence2 = input[3].split(' ').map(Number);
    lcs2(sequence1, sequence2);
    process.exit();
  }
};

rl.on('line', readLine);
