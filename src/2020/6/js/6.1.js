fs = require("fs");
fs.readFile("src/2020/6/inputs.txt", "utf8", function (err, data) {
  const inputs = data
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g)
    .reduce((acc, curr) => {
      curr = curr.replace(/\n/g, "");
      return (acc += [...new Set(curr.split(""))].length);
    }, 0);

  console.log(inputs);
  console.time("exec");

  console.timeEnd("exec");
});
