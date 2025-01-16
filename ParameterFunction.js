//question 1
function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
  }
console.log(calculateDiscount(10));

//question2
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
arr1=[1,2,3];
arr2=[4,5,6];
console.log(mergeArrays(arr1,arr2))

//question3
function logArguments(...args) {
    console.log(args);
  }
console.log(1,2,3,4,5)  

//question4
function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
  }

console.log(createMessage("Hello","Devansh","Tiwari"))

//question5
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); 
 // Output: 6

 function createUserProfile(username, age = 25, country = "Unknown") {
    return { username, age, country };
  }
  
  
  