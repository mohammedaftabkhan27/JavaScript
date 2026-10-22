// ===== Part 1: Array Manipulation Methods =====

// 1. push()
let fruits = ["apple", "banana", "mango", "orange", "grape"];
fruits.push("kiwi", "papaya", "pear");
console.log("1:", fruits);

// 2. pop()
let nums2 = [1, 2, 3, 4, 5, 6];
nums2.pop();
console.log("2:", nums2); // [1,2,3,4,5]

// 3. shift()
let names = ["Asha", "Ravi", "Meena", "Kiran", "Divya"];
names.shift();
console.log("3:", names); // removes "Asha"

// 4. unshift()
let nums4 = [30, 40, 50, 60];
nums4.unshift(10, 20);
console.log("4:", nums4); // [10,20,30,40,50,60]

// 5. splice(start, deleteCount) - remove 2 elements from index 1
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(1, 2);
console.log("5:", arr5); // [10,40,50]

// 6. splice(start, deleteCount, newItem) - replace 3 with 100
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(arr6.indexOf(3), 1, 100);
console.log("6:", arr6); // [1,2,100,4,5]

// 7. fill(value, start, end) - end is exclusive, so 5 covers index 4
let arr7 = [1, 2, 3, 4, 5];
arr7.fill("hello", 2, 5);
console.log("7:", arr7); // [1,2,"hello","hello","hello"]

// ===== Part 2: Array Merge and Search Methods =====

// 8. concat()
let a8 = [1, 2, 3];
let b8 = [4, 5, 6];
console.log("8:", a8.concat(b8)); // [1,2,3,4,5,6]

// 9. slice(start, end) - end is exclusive
let arr9 = [10, 20, 30, 40, 50, 60];
console.log("9:", arr9.slice(1, 4)); // [20,30,40]

// 10. flat(Infinity)
let nested10 = [1, [2, [3, [4, 5]]], 6];
console.log("10:", nested10.flat(Infinity)); // [1,2,3,4,5,6]

// 11. includes()
let arr11 = [10, 20, 30, 40, 50];
console.log("11:", arr11.includes(30)); // true

// 12. indexOf()
let arr12 = [5, 10, 15, 20, 25];
console.log("12:", arr12.indexOf(20)); // 3

// 13. lastIndexOf()
let arr13 = [1, 2, 3, 2, 1, 2];
console.log("13:", arr13.lastIndexOf(2)); // 5

// 14. sort() - default sort is alphabetical, so use a compare function for numbers
let arr14 = [40, 5, 100, 25, 1];
arr14.sort((a, b) => a - b);
console.log("14:", arr14); // [1,5,25,40,100]

// 15. reverse()
let arr15 = [1, 2, 3, 4, 5, 6, 7];
arr15.reverse();
console.log("15:", arr15); // [7,6,5,4,3,2,1]

// ===== Part 3: Spread and Rest Operators =====

// 16. Merge arrays with spread
let a16 = [1, 2, 3, 4];
let b16 = [5, 6, 7, 8];
let merged16 = [...a16, ...b16];
console.log("16:", merged16);

// 17. Merge objects with spread
let student = { name: "Asha", age: 20, course: "CSE" };
let job = { company: "TechCorp", role: "Intern" };
let combined = { ...student, ...job };
console.log("17:", combined);

// 18. Rest operator collects remaining arguments
function collect(first, second, ...rest) {
  console.log("18: first =", first, "second =", second, "rest =", rest);
}
collect(1, 2, 3, 4, 5); // rest = [3,4,5]

// 19. function one(a, b, ...c)
function one(a, b, ...c) {
  console.log("19:", a + b + c[0] + c[1]);
}
one(1, 2, 3, 4, 5); // 1+2+3+4 = 10

// 20. Copy an array using spread
let first20 = [1, 2, 3];
let second20 = [4, 5];
let copy20 = [...first20];
console.log("20:", copy20, "| (second array untouched):", second20);

// ===== Part 4: Array Destructuring =====

// 21.
let arr21 = [10, 20, 30, 40];
let [w, x, y, z] = arr21;
console.log("21:", w, x, y, z);

// 22. Nested destructuring
let nested22 = [1, 2, [3, 4, [5, 6]]];
let [n1, n2, [n3, n4, [n5, n6]]] = nested22;
console.log("22:", n1, n2, n3, n4, n5, n6);

// 23.
let studentInfo = ["Asha", 20, 8.7];
let [sName, sAge, cgpa] = studentInfo;
console.log(`23: Name: ${sName}, Age: ${sAge}, CGPA: ${cgpa}`);

// ===== Part 5: Object Destructuring =====

// 24.
let person = { name: "Ravi", role: "Developer", location: "Bengaluru" };
let { name, role, location } = person;
console.log("24:", name, role, location);

// 25. Nested object destructuring
let stu = { name: "Meena", address: { city: "Chennai", state: "Tamil Nadu" } };
let {
  address: { city, state },
} = stu;
console.log("25:", city, state);

// 26.
let emp26 = {
  name: "Kiran",
  role: "Designer",
  location: { mainLocation: "Hyderabad", currentLocation: "Pune" },
};
let {
  name: n26,
  role: r26,
  location: { mainLocation, currentLocation },
} = emp26;
console.log("26:", n26, r26, mainLocation, currentLocation);

// ===== Part 6: Mixed Practical Challenges =====

// 27.
let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr27.shift();
arr27.pop();
arr27.unshift(98, 99);
console.log("27:", arr27); // [98,99,2,3,4,5,6,7,8,9]

// 28.
let arr28 = [4, 7, 9, 7, 2, 7, 5];
let target = 7;
console.log("28: includes", target, "?", arr28.includes(target));
console.log("28: first index:", arr28.indexOf(target));
console.log("28: last index:", arr28.lastIndexOf(target));

// 29.
let empBasic = { name: "Divya", id: 101 };
let empWork = { role: "Analyst", dept: "Finance" };
let employee = { ...empBasic, ...empWork };
let { name: empName, role: empRole } = employee;
console.log("29:", empName, empRole);

// 30.
let nested30 = [1, [2, 3], [4, [5, 6]]];
let result30 = nested30.flat(Infinity).reverse();
console.log("30:", result30); // [6,5,4,3,2,1]