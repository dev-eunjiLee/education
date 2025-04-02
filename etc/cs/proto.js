function Person() {}

Person.prototype.eyes = 2;
Person.prototype.mouth = 1;

const kai = new Person();
console.log(kai.eyes, kai.mouth);

class Animal {
  constructor() {}
}

Animal.prototype.skin = 1;
Animal.prototype.blood = 1;

const cat = new Animal();
console.log(cat.skin, cat.blood);
