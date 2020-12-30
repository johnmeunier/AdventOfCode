fs = require("fs");

const computeDataToArrayOfPassport = (data) =>
  data
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g)
    .map((passport) => {
      return Object.fromEntries(
        passport
          .split(/ |\n/)
          .sort()
          .map((pass) => pass.split(":"))
      );
    });

const isAValidPassport = ({ byr, iyr, eyr, hgt, hcl, ecl, pid }) => byr && iyr && eyr && hgt && hcl && ecl && pid;

fs.readFile("src/2020/4/inputs.txt", "utf8", function (err, data) {
  console.time();
  const passports = computeDataToArrayOfPassport(data);
  let validCounter = 0;
  for (let i = 0; i < passports.length; i++) {
    validCounter += isAValidPassport(passports[i]) ? 1 : 0;
  }
  console.log(validCounter);
  console.timeEnd();
});
