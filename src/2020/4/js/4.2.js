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

const validation = {
  byr: (val) => val >= 1920 && val <= 2002,
  iyr: (val) => val >= 2010 && val <= 2020,
  eyr: (val) => val >= 2020 && val <= 2030,
  hgt: (val) => {
    if (val.includes("cm")) {
      val = val.replace("cm", "");
      return val >= 150 && val <= 193;
    } else if (val.includes("in")) {
      val = val.replace("in", "");
      return val >= 59 && val <= 76;
    } else {
      return false;
    }
  },
  hcl: (val) => /#([0-9]|[a-f]){6}/.test(val),
  ecl: (val) => /amb|blu|brn|gry|grn|hzl|oth/.test(val),
  pid: (val) => /^\d{9}$/.test(val),
  cid: () => true,
};

fs.readFile("src/2020/4/inputs.txt", "utf8", function (err, data) {
  console.time();
  const passports = computeDataToArrayOfPassport(data);
  const validCounter = passports
    .filter((passport) => isAValidPassport(passport))
    .filter((curr) => {
      if (
        Object.entries(curr).every(([key, value]) => {
          return validation[key](value);
        })
      ) {
        return true;
      }
      return false;
    });
  console.log(validCounter.length);
  console.timeEnd();
});
