// 1.
const cube = function(x) {
  return x * x * x;
}

// 2.
const fullName = function(first, last) {
  return first + " " + last;
}

// 3.
const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

//step 2

//1. Why does JavaScript output undefined instead of throwing an error in the following code? 
// cause var - hoisted on the top, but we can see the content only when code runs

//2. Why does JavaScript throw an error instead of logging undefined in the following code?
// cause let can be accesed only after initializaton

//3. Explain precisely what happens when the following code is executed.
// error , cause console.log can not use function showMessage before its initializatiom

//4.Why does JavaScript not throw any errors when the following code is executed?
// cause function declarations are completely hoisted

//step 3

// 1.
let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

// 2.
let lastLogin = '1/1/1970';

console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};


