const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  const newStr = str.replace(/[a-zA-Z]/g, (char) => {
    const upper = char.toUpperCase();
    return char === upper ? char.toLowerCase() : upper;
  });
  console.log(newStr);
});
