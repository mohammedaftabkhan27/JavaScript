
// 1. forEach
{
  const nums = [3, 8, 12, 25, 7, 40, 18, 5, 30, 22];
  nums.forEach((n) => console.log(n));
}
 
// 2. map – multiply by 5
{
  const nums = [1, 2, 3, 4, 5];
  const times5 = nums.map((n) => n * 5);
  console.log(times5); // [5, 10, 15, 20, 25]
}
 
// 3. filter – greater than 20
{
  const nums = [5, 12, 21, 30, 18, 45];
  console.log(nums.filter((n) => n > 20)); // [21, 30, 45]
}
 
// Employee array used in tasks 4, 5 and 36
const employees = [
  { name: "Asha", salary: 250000 },
  { name: "Ravi", salary: 450000 },
  { name: "Meena", salary: 300000 },
  { name: "Kiran", salary: 180000 },
  { name: "Sanjay", salary: 520000 },
];
 
// 4. filter – salary <= 300000
{
  const result = employees.filter((e) => e.salary <= 300000);
  console.log(result);
}
 
// 5. find – first with salary > 200000
{
  const first = employees.find((e) => e.salary > 200000);
  console.log(first); // { name: "Asha", salary: 250000 }
}
 
// 6. reduce – total
{
  const nums = [10, 20, 30, 40];
  const total = nums.reduce((acc, n) => acc + n, 0);
  console.log(total); // 100
}
 
// 7. some – at least one even
{
  const nums = [1, 3, 5, 8, 9];
  console.log(nums.some((n) => n % 2 === 0)); // true
}
 
// 8. every – all greater than zero
{
  const nums = [4, 9, 2, 7];
  console.log(nums.every((n) => n > 0)); // true
}
 
// 9. sort ascending
{
  const nums = [40, 1, 5, 100, 25];
  nums.sort((a, b) => a - b);
  console.log(nums); // [1, 5, 25, 40, 100]
}
 
// 10. sort descending
{
  const nums = [40, 1, 5, 100, 25];
  nums.sort((a, b) => b - a);
  console.log(nums); // [100, 40, 25, 5, 1]
}
 
// ---------- Part 2: String Methods ----------
 
// 11. charAt
{
  const str = "javascript";
  console.log(str.charAt(4)); // "s"
}
 
// 12. charCodeAt
{
  const str = "javascript";
  console.log(str.charCodeAt(2)); // 118 ("v")
}
 
// 13. trim
{
  const str = "   hello world   ";
  console.log(`[${str.trim()}]`); // [hello world]
}
 
// 14. upper / lower case
{
  const str = "Hello JavaScript";
  console.log(str.toUpperCase()); // HELLO JAVASCRIPT
  console.log(str.toLowerCase()); // hello javascript
}
 
// 15. includes
{
  const str = "javascript";
  console.log(str.includes("script")); // true
}
 
// 16. startsWith / endsWith
{
  const str = "JavaScript";
  console.log(str.startsWith("Java")); // true
  console.log(str.endsWith("Script")); // true
}
 
// 17. replaceAll
{
  const str = "java is fun, java is popular";
  console.log(str.replaceAll("java", "python"));
  // "python is fun, python is popular"
}
 
// 18. split
{
  const str = "html-css-javascript-react";
  console.log(str.split("-")); // ["html", "css", "javascript", "react"]
}
 
// 19. join
{
  const names = ["Asha", "Ravi", "Meena"];
  console.log(names.join(",")); // "Asha,Ravi,Meena"
}
 
// 20. slice
{
  const str = "JavaScript is awesome";
  console.log(str.slice(0, 10)); // "JavaScript"
}
 
// ---------- Part 3: Date Methods ----------
 
// 21. year, month, date, day
{
  const d = new Date();
  console.log("Year:", d.getFullYear());
  console.log("Month:", d.getMonth()); // 0-11
  console.log("Date:", d.getDate());
  console.log("Day:", d.getDay()); // 0 = Sunday
}
 
// 22. month name via getMonth()
{
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const d = new Date();
  console.log(months[d.getMonth()]);
}
 
// 23. hours, minutes, seconds
{
  const d = new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}
 
// 24. setters
{
  const d = new Date();
  d.setFullYear(2003);
  d.setMonth(0); // January
  d.setDate(30);
  console.log(d.toDateString()); // Thu Jan 30 2003
}
 
// ---------- Part 4: Asynchronous JavaScript ----------
 
// 25. setTimeout – 3 seconds
setTimeout(() => {
  console.log("Welcome to JavaScript");
}, 3000);
 
// 26 & 27. setInterval every 2s, stopped after 8s with clearInterval
const intervalId = setInterval(() => {
  console.log("Learning JavaScript");
}, 2000);
 
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 8000);
 
// 28. Execution order: one, three, two
{
  function one() { console.log("one"); }
  function two() { console.log("two"); }
  function three() { console.log("three"); }
 
  one();
  setTimeout(two, 0);
  three();
  // Output: one, three, two
  // setTimeout callbacks go to the task queue and run only after the
  // current synchronous code has finished, even with a 0 ms delay.
}
 
// ---------- Part 5: Promises and API Fetching ----------
 
// 29. Promise resolve + .then()
{
  const login = new Promise((resolve) => resolve("Login successful"));
  login.then((msg) => console.log(msg));
}
 
// 30. Promise reject + .catch()
{
  const password = new Promise((_, reject) => reject("Invalid password"));
  password.catch((err) => console.log(err));
}
 
// 31. .finally()
{
  const p = new Promise((resolve, reject) => {
    const ok = true; // change to false to test rejection
    ok ? resolve("Success") : reject("Failure");
  });
 
  p.then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Process completed"));
}
 
const API_URL = "https://fakestoreapi.com/products";
 
// 32. Print all product titles
fetch(API_URL)
  .then((res) => res.json())
  .then((products) => {
    products.forEach((p) => console.log(p.title));
  });
 
// 33. Print title, price and category
fetch(API_URL)
  .then((res) => res.json())
  .then((products) => {
    products.forEach((p) => {
      console.log(`Title: ${p.title} | Price: ${p.price} | Category: ${p.category}`);
    });
  });
 
// 34. Handle errors with .catch() and console.warn()
fetch(API_URL)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return res.json();
  })
  .then((products) => console.log("Fetched", products.length, "products"))
  .catch((err) => console.warn("Error:", err.message));
 
// 35. .finally() after fetch
fetch(API_URL)
  .then((res) => res.json())
  .then((products) => console.log("Products received:", products.length))
  .catch((err) => console.warn(err.message))
  .finally(() => console.log("API call completed"));
 
// ---------- Part 6: Real-Time Mini Tasks ----------
 
// 36. Employee salary report
{
  employees
    .filter((e) => e.salary < 300000)
    .forEach((e) => console.log(`${e.name}: ₹${e.salary}`));
}
 
// 37. Product price calculator – map to { title, price }
fetch(API_URL)
  .then((res) => res.json())
  .then((products) => {
    const list = products.map((p) => ({ title: p.title, price: p.price }));
    console.log(list);
  })
  .catch((err) => console.warn(err.message));
 
// 38. Product search by category
fetch(API_URL)
  .then((res) => res.json())
  .then((products) => {
    const category = "electronics";
    const result = products.filter((p) => p.category === category);
    result.forEach((p) => console.log(`${p.title} - $${p.price}`));
  })
  .catch((err) => console.warn(err.message));
 
// 39. Number analysis
{
  const nums = [4, 11, 16, 23, 8, 42, 15];
 
  const doubled = nums.map((n) => n * 2);
  const greaterThan10 = nums.filter((n) => n > 10);
  const sum = nums.reduce((acc, n) => acc + n, 0);
  const hasEven = nums.some((n) => n % 2 === 0);
  const allPositive = nums.every((n) => n > 0);
 
  console.log("Doubled:", doubled);
  console.log("Greater than 10:", greaterThan10);
  console.log("Sum:", sum);
  console.log("Has an even number:", hasEven);
  console.log("All positive:", allPositive);
}
 
// 40. Product listing with error handling and completion message
fetch(API_URL)
  .then((res) => res.json())
  .then((products) => {
    products.forEach((p) => {
      console.log(`Title: ${p.title}`);
      console.log(`Price: ${p.price}`);
      console.log(`Category: ${p.category}`);
      console.log("---");
    });
  })
  .catch((err) => console.warn("Something went wrong:", err.message))
  .finally(() => console.log("Product listing completed"));
 