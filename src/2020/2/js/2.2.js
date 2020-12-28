fs = require("fs");
fs.readFile("src/2020/2/inputs.txt", "utf8", function (err, data) {
  const inputs = data.split("\n");
  console.time();
  console.log(
    inputs.filter((input) => {
      const [, pos1, pos2, letter, chain] = input.match(/(\d+)-(\d+) (\w): (.+)/);
      return (chain[pos1 - 1] === letter) ^ (chain[pos2 - 1] === letter);
    }).length
  );
  console.timeEnd();
});
