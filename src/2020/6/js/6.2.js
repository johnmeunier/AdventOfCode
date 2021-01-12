fs = require("fs");
fs.readFile("src/2020/6/inputs.txt", "utf8", function (err, data) {
  const inputs = data
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g)
    .map((group) => group.split("\n"));

  let result = 0;
  inputs.forEach((group) => {
    let commonQuestion = new Set();
    group.forEach((person) => {
      person.split("").forEach((question) => {
        group.every((person) => person.includes(question)) && commonQuestion.add(question);
      });
    });
    result += commonQuestion.size;
  });
  console.log(result);
  console.time("exec");

  console.timeEnd("exec");
});
