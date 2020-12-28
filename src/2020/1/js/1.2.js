fs = require("fs");
fs.readFile("src/2020/1/inputs.txt", "utf8", function (err, data) {
  err && console.log(err);
  const inputs = data.split("\n").map(Number);
  console.time("exec");
  loop1: for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs.length - 1; j++) {
      for (let k = 0; k < inputs.length - 2; k++) {
        if (inputs[i] + inputs[j] + inputs[k] === 2020) {
          console.log(inputs[i] * inputs[j] * inputs[k]);
          console.timeEnd("exec");
          break loop1;
        }
      }
    }
  }
});
