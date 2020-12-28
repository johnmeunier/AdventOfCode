fs = require("fs");
fs.readFile("src/2020/1/inputs.txt", "utf8", function (err, data) {
  const inputs = data.split("\n");
  console.time("exec");
  for (let i = 0; i < inputs.length; i++) {
    const curr = inputs[i];
    const answer = inputs.find((val) => 2020 - curr - val === 0);
    if (answer) {
      console.log(answer * curr);
      console.timeEnd("exec");
      break;
    }
  }
});
