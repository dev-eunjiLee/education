function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const increased = n + 1;
      console.log({ inner: increased });
      resolve(increased);
    }, 1000);
  });
}

async function main() {
  await increaseAndPrint(99);
  increaseAndPrint(1).then((n) => increaseAndPrint(n));
  console.log(333333);
}

(async () => {
  await main();
  console.log("메인 뒤");
})();
