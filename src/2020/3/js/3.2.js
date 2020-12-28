fs = require("fs");
fs.readFile("src/2020/3/inputs.txt", "utf8", function (err, data) {
  let inputs = data.split("\n");
  console.time();
  const width = inputs[0].length;
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  let answer = 1;
  slopes.forEach(([slopeX, slopeY]) => {
    let counter = 0;
    let counter2 = 0;
    for (let i = 0; i < inputs.length; i += slopeY) {
      counter += inputs[i][(counter2 * slopeX) % width] === "#" ? 1 : 0;
      counter2++;
    }
    console.log(counter);
    answer *= counter;
  });
  console.log(answer);
  console.timeEnd();
});
