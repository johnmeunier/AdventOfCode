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
  const ids = inputs.map((bsp) => {
    const row = bsp.substring(0, 7).split("");
    const columns = bsp.substring(7).split("");
    return calculPosition(row, [0, 127]) * 8 + calculPosition(columns, [0, 7]);
  });
  ids.sort((a, b) => a - b);
  const possibleSeats = [];
  for (let i = 1; i < ids.length - 1; i++) {
    const prev = ids[i - 1];
    const seat = ids[i];
    const next = ids[i + 1];
    if (!(prev + 1 === seat && seat + 1 === next)) {
      possibleSeats.push(seat);
    }
  }
  console.log((possibleSeats[0] + possibleSeats[1]) / 2);
  console.timeEnd("exec");
});
