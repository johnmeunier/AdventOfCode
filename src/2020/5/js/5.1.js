fs = require("fs");

const calculPosition = (chain, [min, max]) => {
  const diff = max - min;
  while (chain.length > 0) {
    const half = chain.shift();
    if (half === "F" || half === "L") {
      max -= Math.ceil(diff / 2);
    }
    if (half === "B" || half === "R") {
      min += Math.ceil(diff / 2);
    }
    if (min === max) {
      return min;
    } else {
      return calculPosition(chain, [min, max]);
    }
  }
};

fs.readFile("src/2020/5/inputs.txt", "utf8", function (err, data) {
  const inputs = data.split("\n");
  console.time("exec");
  let max = 0;
  for (let bsp of inputs) {
    const row = bsp.substring(0, 7).split("");
    const columns = bsp.substring(7).split("");
    const id = calculPosition(row, [0, 127]) * 8 + calculPosition(columns, [0, 7]);
    if (id > max) {
      max = id;
    }
  }
  console.log(max);

  console.timeEnd("exec");
});
