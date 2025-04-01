const sym1 = Symbol();
const sym2 = Symbol("test");
const sym3 = Symbol("test");

console.log(sym1);
console.log(sym2);

console.log(typeof sym1);
console.log(typeof sym2);

console.log(sym2 === sym3); // false

console.log(Symbol.iterator);

const Direction = Object.freeze({
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
});

console.log(Direction);
console.log(Direction.UP);
