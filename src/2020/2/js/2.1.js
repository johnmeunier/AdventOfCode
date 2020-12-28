fs = require("fs");
fs.readFile("src/2020/2/inputs.txt", "utf8", function (err, data) {
  const inputs = data.split("\n");
  console.time();
  console.log(
    inputs.filter((input) => {
      const [, min, max, letter, chain] = input.split(/(\d+)-(\d+) (\w): (.+)/);
      const occur = chain.split(letter).length - 1;
      return occur >= min && occur <= max;
    }).length
  );
  console.timeEnd();
});
