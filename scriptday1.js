// 1. var — 10 Questions

// 1. Create a var variable called name and initialize it with your name. Print it.
var name = "Aftab";
console.log(name);

// 2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;
console.log(age);

// 3. Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";
console.log(city);

// 4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
var salary = 35000;
console.log(salary);

// 5. Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var message = "Hello";
message = "Bye";
var message = "Welcome";
console.log(message);

// 6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";
console.log(department);

// 7. Create a var variable called mark with 50, reassign it to 75, and print it.
var mark = 50;
mark = 75;
console.log(mark);

// 8. Create a var variable called company and redeclare it with another company name.
var company = "Stackly";
var company = "Infosys";
console.log(company);

// 9. Create a var variable without assigning a value, then initialize it later and print it.
var game;
game = "PUBG";
console.log(game);

// 10. Create one var variable and change its value three times. Print the final value.
var value = "HI";
value = "HELLO";
value = "GOOD MORNING";
value = "GOOD NIGHT";
console.log(value);



// 2. let — 10 Questions


// 11. Create a let variable called age and initialize it with your age. Print it.
{
    let age = 23;
    console.log(age);
}

// 12. Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
{
    let salary = 30000;
    salary = 40000;
    console.log(salary);
}

// 13. Create a let variable called name, assign your name, then change it to another name.
{
    let name = "Aftab";
    name = "Khan";
    console.log(name);
}

// 14. Create a let variable called department and change its value from "ECE" to "CSE".
{
    let department = "ECE";
    department = "CSE";
    console.log(department);
}

// 15. Create a let variable called mark, initialize it with 60, then reassign it to 90.
{
    let mark = 60;
    mark = 90;
    console.log(mark);
}

// 16. Declare a let variable without initialization. Later assign a value and print it.
{
    let value;
    value = 50;
    console.log(value);
}

// 17. Try to redeclare the same let variable. Observe what happens.
try {
    new Function('let number = 10; let number = 20;')();
} catch (error) {
    console.log("Q17 Error:", error.name);
}

// 18. Create a let variable called city and reassign it two times. Print the final value.
{
    let city = "Hyderabad";
    city = "Bengaluru";
    city = "Mumbai";
    console.log(city);
}

// 19. Create three different let variables and print all three.
{
    let name = "Aftab";
    let age = 23;
    let qualification = "BTech";

    console.log(name);
    console.log(age);
    console.log(qualification);
}

// 20. Create a let variable, initialize it, reassign it, and try to redeclare it.
try {
    new Function('let score = 50; score = 80; let score = 100;')();
} catch (error) {
    console.log("Q20 Error:", error.name);
}



// 3. const — 8 Questions


// 21. Create a const variable called age with value 25 and print it.
{
    const age = 25;
    console.log(age);
}

// 22. Create a const variable called salary with value 50000 and print it.
{
    const salary = 50000;
    console.log(salary);
}

// 23. Create a const variable called company with "Stackly" and print it.
{
    const company = "Stackly";
    console.log(company);
}

// 24. Try to reassign a const variable with another value. Observe the result.
try {
    new Function('const price = 100; price = 200;')();
} catch (error) {
    console.log("Q24 Error:", error.name);
}

// 25. Try to redeclare a const variable. Observe the result.
try {
    new Function('const city = "Delhi"; const city = "Mumbai";')();
} catch (error) {
    console.log("Q25 Error:", error.name);
}

// 26. Create a const variable called college and initialize it with your college name.
{
    const college = "Sharnbasva University";
    console.log(college);
}

// 27. Create three const variables for name, age, and department. Print them.
{
    const name = "Aftab";
    const age = 23;
    const department = "ECE";

    console.log(name);
    console.log(age);
    console.log(department);
}

// 28. Write a program using one var, one let, and one const variable. Print all three.
{
    var company2 = "Stackly";
    let department2 = "CSE";
    const age2 = 25;

    console.log(company2);
    console.log(department2);
    console.log(age2);
}



// 4. Printing Statements — 7 Questions


// 29. Print your name using console.log().
console.log("Aftab");

// 30. Create a variable containing your age and print it using console.log().
{
    let age = 23;
    console.log(age);
}

// 31. Print the number 100 using console.log().
console.log(100);

// 32. Create three variables and print their values using console.log().
{
    let name = "Aftab";
    let age = 23;
    let department = "ECE";

    console.log(name);
    console.log(age);
    console.log(department);
}

// 33. Create a variable called message with "Hello JavaScript" and print it.
{
    let message = "Hello JavaScript";
    console.log(message);
}

// 34. Create a variable, print its value, change its value, and print it again.
{
    let number = 10;
    console.log(number);

    number = 20;
    console.log(number);
}

// 35. Print your name, age, and qualification using three separate console.log() statements.
console.log("Name: Aftab");
console.log("Age: 23");
console.log("Qualification: BTech ECE");



// 5. alert() — 5 Questions


// 36. Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");

// 37. Create a variable called userName and display it using alert().
{
    let userName = "Aftab";
    alert(userName);
}

// 38. Create a variable called userAge and display it using alert().
{
    let userAge = 23;
    alert(userAge);
}

// 39. Create a variable containing "Welcome Naveen" and show it in a popup.
{
    let message = "Welcome Naveen";
    alert(message);
}

// 40. Create a variable containing your qualification and display it using alert().
{
    let qualification = "BTech ECE";
    alert(qualification);
}



// 6. prompt() — 5 Questions


// 41. Ask the user "What is your name?" using prompt() and print the answer in the console.
{
    let name = prompt("What is your name?");
    console.log(name);
}

// 42. Ask the user "How old are you?" using prompt() and display the answer using alert().
{
    let age = prompt("How old are you?");
    alert(age);
}

// 43. Ask the user for their qualification and print the answer in the console.
{
    let qualification = prompt("Enter your qualification:");
    console.log(qualification);
}

// 44. Ask the user for their name and show the entered name in a popup.
{
    let userName = prompt("Enter your name:");
    alert(userName);
}

// 45. Ask the user for their age and print the entered age in the console.
{
    let userAge = prompt("Enter your age:");
    console.log(userAge);
}



// 7. confirm() & document.writeln() — 3 Questions


// 46. Create a confirmation box asking "Do you know programming?".
{
    let answer = confirm("Do you know programming?");
    console.log(answer);
}

// 47. Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
{
    let message = "Welcome to Batch 41";
    document.writeln(message);
}

// 48. Ask the user "Do you want to continue?" using confirm().
{
    let choice = confirm("Do you want to continue?");
    console.log(choice);
}


// 8. Console Methods — 2 Questions

// 49. Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
console.log("This is a normal message");
console.warn("This is a warning message");
console.error("This is an error message");

// 50. Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
console.log("Message before clear");
console.warn("Warning message");
console.error("Error message");
console.clear();
