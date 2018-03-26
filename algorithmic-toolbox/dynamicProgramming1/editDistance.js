const editDistance = (str1, str2) => {
  const table = [];
  for (let m = 0; m <= str1.length; m++) {
    table[m] = new Array(str2.length+1).fill(0);
    table[m][0] = m;
  }
  for (let n = 1; n <= str2.length; n++) {
    table[0][n] = n;
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const diff = str1[i-1] === str2[j-1] ? 0 : 1;
      table[i][j] = Math.min(
        1 + table[i-1][j],
        1 + table[i][j-1],
        diff + table[i-1][j-1]
      );
    }
  }
  return table[str1.length][str2.length];
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
  if (input.length === 2) {
    const string1 = input[0];
    const string2 = input[1];
    console.log(editDistance(string1, string2));
    process.exit();
  }
};

rl.on('line', readLine);
