// ============================================================
// Part 1: Functions and Parameters
// ============================================================
console.log("---- Part 1 ----");

// 1
function welcome() {
  console.log("Welcome to JavaScript");
}
welcome();

// 2
function studentDetails(name, age, cgpa) {
  console.log("Name:", name, "| Age:", age, "| CGPA:", cgpa);
}
studentDetails("Asha", 20, 8.7);
studentDetails("Ravi", 21, 9.1);

// 3
function calculateFee(fee) {
  return fee;
}
const studentFee = calculateFee(150000);
console.log("Student fee:", studentFee);

// 4
function discount(percent) {
  const fee = 200000;
  const finalFee = fee - (fee * percent) / 100;
  console.log(`Final fee after ${percent}% discount: ₹${finalFee}`);
}
discount(10);

// 5
function studentForm(name, age, disability = "no") {
  console.log(`Name: ${name}, Age: ${age}, Disability: ${disability}`);
}
studentForm("Asha", 20, "yes");
studentForm("Ravi", 21, "no");
studentForm("Meena", 19); // disability defaults to "no"

// ============================================================
// Part 2: Function Types and Scope
// ============================================================
console.log("\n---- Part 2 ----");

// 6 - named function
function showMessage(message) {
  console.log(message);
}
showMessage("Hello from a named function");

// 7 - anonymous function stored in a variable
const showName = function (name) {
  console.log("Name:", name);
};
showName("Asha");

// 8 - arrow function
const showNumber = (num) => console.log("Number:", num);
showNumber(42);

// 9 - var / let / const scope inside an if block
function scopeDemo() {
  if (true) {
    var a = "var";
    let b = "let";
    const c = "const";
    console.log("Inside block:", a, b, c); // all accessible
  }
  console.log("Outside block, var:", a); // accessible (function scoped)
  try {
    console.log(b);
  } catch (e) {
    console.log("Outside block, let:", e.message); // ReferenceError
  }
  try {
    console.log(c);
  } catch (e) {
    console.log("Outside block, const:", e.message); // ReferenceError
  }
}
scopeDemo();

// 10 - hoisting: prints undefined (declaration is hoisted, assignment is not)
console.log(value);
var value = 10;

// ============================================================
// Part 3: Callback and Higher-Order Functions
// ============================================================
console.log("\n---- Part 3 ----");

// 11
function second() {
  console.log("second() executed as a callback");
}
function first(callback) {
  console.log("first() started");
  callback();
}
first(second);

// 12
function add(callback, a, b) {
  console.log("Sum:", a + b);
  callback(10, 5);
}
add((x, y) => console.log("Callback received:", x, y), 3, 4);

// 13
const sub = (num1, num2) => console.log("Subtraction:", num1 - num2);
add(sub, 20, 30);

// 14
function multiply(callback, a, b) {
  console.log("Multiplication:", a * b);
  callback();
}
multiply(() => console.log("multiply callback executed"), 6, 7);

// 15
function divide(num1, num2) {
  console.log("Division:", num1 / num2);
}
function runOperation(callback, x, y) {
  callback(x, y);
}
runOperation(divide, 100, 4);

// 16 - higher-order function
function greetStudent(callback) {
  callback("Asha");
}
greetStudent((name) => console.log("Hello,", name));

// ============================================================
// Part 4: Generator Functions
// ============================================================
console.log("\n---- Part 4 ----");

// 17
function* cashbackOffers() {
  yield "10% cashback";
  yield "30% cashback";
  yield "Better luck next time";
}

// 18
const offer = cashbackOffers();
console.log(offer.next()); // { value: '10% cashback', done: false }
console.log(offer.next()); // { value: '30% cashback', done: false }
console.log(offer.next()); // { value: 'Better luck next time', done: false }

// 19
function* discountMessages() {
  yield "5% off on books";
  yield "10% off on laptops";
  yield "15% off on phones";
  yield "20% off on shoes";
  yield "25% off on watches";
}
for (const msg of discountMessages()) {
  console.log(msg);
}

// 20
function* studentNames() {
  yield "Asha";
  yield "Ravi";
  yield "Meena";
}
for (const name of studentNames()) {
  console.log(name);
}

// 21
function* fourYields() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
const gen = fourYields();
console.log(gen.next()); // done: false
console.log(gen.next()); // done: false
console.log(gen.next()); // done: false
console.log(gen.next()); // done: false (4th yield)
console.log(gen.next()); // { value: undefined, done: true }
console.log("done after consuming:", gen.next().done); // true

// ============================================================
// Part 5: Currying and Uncurrying
// ============================================================
console.log("\n---- Part 5 ----");

// 22 - normal function
function addThree(a, b, c) {
  console.log("Sum:", a + b + c);
}
addThree(5, 10, 15);

// 23 - curried using nested functions
function addCurried(a) {
  return function (b) {
    return function (c) {
      console.log("Sum:", a + b + c);
    };
  };
}

// 24
addCurried(5)(10)(15);

// 25
function totalPrice(price) {
  return function (discountPercent) {
    return function (quantity) {
      const total = price * quantity * (1 - discountPercent / 100);
      console.log(`Total discounted price: ₹${total}`);
      return total;
    };
  };
}
totalPrice(500)(10)(3); // 1350

// 26 - normal vs curried
function multiplyThree(a, b, c) {
  return a * b * c;
}
const multiplyThreeCurried = (a) => (b) => (c) => a * b * c;
const normalResult = multiplyThree(2, 3, 4);
const curriedResult = multiplyThreeCurried(2)(3)(4);
console.log("Normal:", normalResult, "| Curried:", curriedResult);
console.log("Results equal:", normalResult === curriedResult);

// ============================================================
// Part 6: IIFE, Return, and Mixed Practice
// ============================================================
console.log("\n---- Part 6 ----");

// 27 - IIFE
(function (product, percent) {
  console.log(`Sale! Get ${percent}% off on ${product}!`);
})("Laptop", 25);

// 28
function getNumber() {
  return 99;
}
const num = getNumber();
console.log("Returned number:", num);

// 29
function getMarks(marks) {
  return marks;
}
const receivedMarks = getMarks(87);
const result = receivedMarks >= 40 ? "Pass" : "Fail";
console.log(`Marks: ${receivedMarks} -> ${result}`);

// 30 - fee calculator: default param + callback + return
function calculateDiscount(fee, percent) {
  return (fee * percent) / 100;
}
function feeCalculator(fee, percent = 10, callback = calculateDiscount) {
  const discountAmount = callback(fee, percent);
  return fee - discountAmount;
}
console.log("Final fee (default 10%):", feeCalculator(200000));
console.log("Final fee (25%):", feeCalculator(200000, 25));