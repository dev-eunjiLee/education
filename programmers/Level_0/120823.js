const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  //   console.log(Number(input[0]));
  const standard = Number(input[0]);

  for (let i = 0; i < standard; i++) {
    let keyword = "";
    for (let j = 0; j <= i; j++) {
      keyword += "*";
    }
    console.log(keyword);
  }
});
