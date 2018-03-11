const coveringSegments = segments => {
  // sort in ascending order by the end of the segement
  const sortedSegments = segments.sort((a,b) => {
    return a[1] - b[1];
  });
  let min = sortedSegments[0][1];
  const points = [min];
  for (let i = 0; i < sortedSegments.length - 1; i++) {
    // compare current min with next segements start
    if (min < sortedSegments[i+1][0]) {
      points.push(sortedSegments[i+1][1]);
      min = sortedSegments[i+1][1];
    }
  }
  return `${points.length}\n${points.join(' ')}`
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
  const n = parseInt(input[0], 10);
  if (input.length === n + 1) {
    const segments =
      input.slice(1).map(segment => segment.split(' ').map(Number));
    console.log(coveringSegments(segments));
    process.exit();
  }
};

rl.on('line', readLine);
