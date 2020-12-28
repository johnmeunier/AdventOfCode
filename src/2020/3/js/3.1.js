fs = require("fs");
fs.readFile("src/2020/3/inputs.txt", "utf8", function (err, data) {
  let inputs = data.split("\n");
  console.time();
  const width = inputs[0].length;
  let counter = 0;
  for (let i = 1; i < inputs.length; i++) {
    counter += inputs[i][(i * 3) % width] === "#" ? 1 : 0;
  }
  console.log(counter);
  console.timeEnd();
});
