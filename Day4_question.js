//question 1
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

//question 2
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));

//question 3
const square = (number) => number * number;
console.log(square(5));

//question 4
const numbers = [1, 2, 3];
const squares = numbers.map((num) => num * num);
console.log(squares);

//question 5
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("hello"));

//question 6
const chainable = (value) => ({
    value,
    add: function (num) {
      this.value += num;
      return this;
    },
    multiply: function (num) {
      this.value *= num;
      return this;
    },
    result: function () {
      return this.value;
    }
  });

const result = chainable(5).add(3).multiply(2).result();
console.log(result);