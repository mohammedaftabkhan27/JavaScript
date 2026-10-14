
// ==================================================
// Part 1: Variables and Data Types (5 Questions)
// ==================================================

// 1. Declare variables using var, let, and const.
// Reassign and redeclare them wherever allowed,
// then print the results.

var company = "Stackly";
var company = "Infosys";
company = "TCS";
console.log("Q1 var:", company);

{
    let department = "ECE";
    department = "CSE";
    console.log("Q1 let:", department);
}

// let and const cannot be redeclared in the same scope.


let x = 10;
let x = 20;

// const declaration
const country = "India";
console.log("Q1 const:", country);


const x = 10;
x = 20;

// 2. Create variables for your name, age, and
// programming knowledge. Print each variable
// and its data type using typeof.

{
    let name = "Aftab";
    let age = 23;
    let programmingKnowledge = true;

    console.log("Q2 Name:", name, typeof name);
    console.log("Q2 Age:", age, typeof age);
    console.log(
        "Q2 Programming knowledge:",
        programmingKnowledge,
        typeof programmingKnowledge
    );
}


// 3. Create an array of 5 fruits. Print the complete
// array, the first element, and the last element.

{
    let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

    console.log("Q3 Complete array:", fruits);
    console.log("Q3 First fruit:", fruits[0]);
    console.log("Q3 Last fruit:", fruits[fruits.length - 1]);
}


// 4. Create an object containing your name, role,
// and CGPA. Print each property separately.

{
    let person = {
        name: "Aftab",
        role: "Software Developer",
        cgpa: 8.52
    };

    console.log("Q4 Name:", person.name);
    console.log("Q4 Role:", person.role);
    console.log("Q4 CGPA:", person.cgpa);
}


// 5. Take the user's name and age using prompt().
// Display the name using alert() and print the age
// in the console.

{
    let userName = prompt("Q5: Enter your name:");
    let userAge = prompt("Q5: Enter your age:");

    alert("Your name is " + userName);
    console.log("Q5 Age:", userAge);
}


// ==================================================
// Part 2: Operators (7 Questions)
// ==================================================

// 6. Declare two numbers and perform addition,
// subtraction, multiplication, division, modulus,
// and exponentiation.

{
    let a = 10;
    let b = 3;

    console.log("Q6 Addition:", a + b);
    console.log("Q6 Subtraction:", a - b);
    console.log("Q6 Multiplication:", a * b);
    console.log("Q6 Division:", a / b);
    console.log("Q6 Modulus:", a % b);
    console.log("Q6 Exponentiation:", a ** b);
}


// 7. Predict the output:
// let a = 5; console.log(a++); console.log(a);
// console.log(++a);

{
    let a = 5;

    console.log("Q7:", a++);
    console.log("Q7:", a);
    console.log("Q7:", ++a);
}


// 8. Predict the output:
// let a = 10; let b = a--; let c = --a;
// console.log(a); console.log(b); console.log(c);

{
    let a = 10;
    let b = a--;
    let c = --a;

    console.log("Q8 a:", a);
    console.log("Q8 b:", b);
    console.log("Q8 c:", c);
}


// 9. Use +=, -=, *=, /=, and %= on a variable
// and print the final value after each operation.

{
    let number = 20;

    number += 5;
    console.log("Q9 After +=:", number);

    number -= 3;
    console.log("Q9 After -=:", number);

    number *= 2;
    console.log("Q9 After *=:", number);

    number /= 4;
    console.log("Q9 After /=:", number);

    number %= 3;
    console.log("Q9 After %=:", number);
}


// 10. Predict the results of these comparisons:
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(10 != "10");
// console.log(10 !== "10");

console.log("Q10:", 5 == "5");
console.log("Q10:", 5 === "5");
console.log("Q10:", 10 != "10");
console.log("Q10:", 10 !== "10");


// 11. Use &&, ||, and ! to check different
// combinations of conditions.

{
    let age = 23;
    let hasID = true;
    let isBlocked = false;

    console.log("Q11 AND:", age >= 18 && hasID);
    console.log("Q11 OR:", age >= 18 || hasID);
    console.log("Q11 NOT:", !isBlocked);
}


// 12. Use the ternary operator to check whether
// a user's age is 18 or above and print a message.

{
    let age = Number(prompt("Q12: Enter your age:"));

    let result = age >= 18
        ? "You are eligible."
        : "You are not eligible.";

    console.log("Q12:", result);
}


// ==================================================
// Part 3: Type Casting and Conditions (6 Questions)
// ==================================================

// 13. Predict the data type of each expression:
// typeof ("hello" + 10)
// typeof (10 + true)
// typeof (10 + null)
// typeof ("hello" + undefined)

console.log("Q13:", typeof ("hello" + 10));
console.log("Q13:", typeof (10 + true));
console.log("Q13:", typeof (10 + null));
console.log("Q13:", typeof ("hello" + undefined));


// 14. Use Number() to convert a value received
// through prompt() into a number. Add 10 and print it.

{
    let input = prompt("Q14: Enter a number:");
    let number = Number(input);

    console.log("Q14 Result:", number + 10);
}


// 15. Use Boolean() to check the Boolean values of
// an empty string, a non-empty string, 0, and true.

console.log("Q15 Empty string:", Boolean(""));
console.log("Q15 Non-empty string:", Boolean("Hello"));
console.log("Q15 Zero:", Boolean(0));
console.log("Q15 True:", Boolean(true));


// 16. Write an if-else statement to check whether
// a number is positive or not.

{
    let number = Number(prompt("Q16: Enter a number:"));

    if (number > 0) {
        console.log("Q16: Positive number");
    } else {
        console.log("Q16: Not a positive number");
    }
}


// 17. Use else-if to display a message based on the
// time entered by the user: early morning, morning,
// afternoon, evening, or night.

{
    let time = Number(prompt("Q17: Enter the hour (0-23):"));

    if (time < 0 || time > 23 || !Number.isInteger(time)) {
        console.log("Q17: Invalid time");
    } else if (time >= 4 && time < 6) {
        console.log("Q17: Early morning");
    } else if (time >= 6 && time < 12) {
        console.log("Q17: Morning");
    } else if (time >= 12 && time < 17) {
        console.log("Q17: Afternoon");
    } else if (time >= 17 && time < 21) {
        console.log("Q17: Evening");
    } else {
        console.log("Q17: Night");
    }
}


// 18. Create a nested if statement to check eligibility
// based on age, height, and weight, following the
// conditions in your code.
// Example conditions: age >= 18, height >= 160,
// weight >= 50.

{
    let age = Number(prompt("Q18: Enter your age:"));

    if (age >= 18) {
        let height = Number(prompt("Enter height in cm:"));

        if (height >= 160) {
            let weight = Number(prompt("Enter weight in kg:"));

            if (weight >= 50) {
                console.log("Q18: Eligible");
            } else {
                console.log("Q18: Not eligible: weight too low");
            }
        } else {
            console.log("Q18: Not eligible: height too low");
        }
    } else {
        console.log("Q18: Not eligible: age too low");
    }
}


// ==================================================
// Part 4: Switch and Loops (8 Questions)
// ==================================================

// 19. Use switch to display a message based on a
// traffic light color: red, yellow, or green.
// Display an error for an invalid color.

{
    let color = prompt("Q19: Enter red, yellow, or green:");

    switch (color.toLowerCase()) {
        case "red":
            console.log("Q19: Stop");
            break;

        case "yellow":
            console.log("Q19: Get ready");
            break;

        case "green":
            console.log("Q19: Go");
            break;

        default:
            console.error("Q19: Invalid traffic light color");
    }
}


// 20. Use a for loop to print numbers from 1 to 20.

console.log("Q20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// 21. Use a for loop to print all even numbers
// from 2 to 20.

console.log("Q21:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// 22. Use a while loop to print numbers
// from 10 down to 1.

console.log("Q22:");
{
    let i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }
}


// 23. Use a do-while loop to print numbers
// from 1 to 10.

console.log("Q23:");
{
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 10);
}


// 24. Use a for-of loop to print each character
// in the string "JavaScript".

console.log("Q24:");
for (let character of "JavaScript") {
    console.log(character);
}


// 25. Use a for-of loop to print every element
// in an array of 5 student names.

console.log("Q25:");
{
    let students = ["Aftab", "Priya", "Rahul", "Sara", "Arun"];

    for (let student of students) {
        console.log(student);
    }
}


// 26. Use a for-in loop to print all keys and values
// of this object:
// let student = {
//     name: "Priya",
//     role: "Frontend Developer",
//     cgpa: 9
// };

console.log("Q26:");
{
    let student = {
        name: "Priya",
        role: "Frontend Developer",
        cgpa: 9
    };

    for (let key in student) {
        console.log(key + ":", student[key]);
    }
}


// ==================================================
// Part 5: Mixed Practice (4 Questions)
// ==================================================

// 27. Take two numbers using prompt() and display
// their sum, difference, product, and remainder.

{
    let num1 = Number(prompt("Q27: Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));

    console.log("Q27 Sum:", num1 + num2);
    console.log("Q27 Difference:", num1 - num2);
    console.log("Q27 Product:", num1 * num2);

    if (num2 !== 0) {
        console.log("Q27 Remainder:", num1 % num2);
    } else {
        console.log("Q27 Remainder: Cannot divide by zero");
    }
}


// 28. Create an array of 5 numbers and use a loop
// to print only the numbers greater than 10.

console.log("Q28:");
{
    let numbers = [5, 12, 8, 25, 15];

    for (let number of numbers) {
        if (number > 10) {
            console.log(number);
        }
    }
}


// 29. Take a user's age using prompt(). Use a
// conditional statement to check eligibility,
// then display the result using alert().

{
    let age = Number(prompt("Q29: Enter your age:"));

    if (age >= 18) {
        alert("You are eligible.");
    } else {
        alert("You are not eligible.");
    }
}


// 30. Create a simple menu using switch with these
// options: addition, subtraction, multiplication,
// and division. Take two numbers from the user
// and display the selected operation's result.

{
    let operation = prompt(
        "Q30: Choose an operation: addition, subtraction, multiplication, division"
    );

    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));
    let result;

    switch (operation.toLowerCase()) {
        case "addition":
            result = num1 + num2;
            break;

        case "subtraction":
            result = num1 - num2;
            break;

        case "multiplication":
            result = num1 * num2;
            break;

        case "division":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;

        default:
            result = "Invalid operation";
    }

    console.log("Q30 Result:", result);
    alert("Result: " + result);
}
