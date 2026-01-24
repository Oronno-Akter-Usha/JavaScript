// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// -----for loop-----
// Print 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log("i", i);
// }

// Calculate sum of 1 to n
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// -----while loop-----
// let i = 1;
// while (i <= 6) {
//   console.log(i);
//   i++;
// }

// -----do while loop-----
// let i = 0;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 10);

//-----for-of loop-----
// let str = "HelloWorld";

// for (let i of str) {
//   console.log("i= ", i);
// }

// let str = "JavaScript";
// let size = 0;
// for (let i of str) {
//   console.log("i =", i);
//   size++;
// }
// console.log("string size = ", size);

// -----for-in loop-----

// let student = {
//   name: "Rahul",
//   age: 20,
//   cgpa: "7.5",
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key=", key, "value=", student[key]);
// }

// Strings
// let str = "Hello World";

// console.log(str.length);
// console.log(str[0]);

// -----Template literals-----

// let specialString = `This is a template literal`;
// console.log(typeof specialString);

// let obj = {
//   item: "pen",
//   price: 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "taka");
// console.log(`the cost of ${obj.item} is ${obj.price} taka`);

// let str = "Hello\nWorld";// \n = next line
// console.log(str);

// let str = "Hello\tWorld"; // \t = tab space
// console.log(str.length);

// -----String Methods-----
// ---toUpperCase---
// let str = "HelloWorld";
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// ---tolowerCase---
// let str = "HelloWorld";
// let newstr = str.toLowerCase();
// console.log(str);
// console.log(newstr);

// ---trim--- [remove starting and end white space]
// let str = "  Hello    World  ";
// let newstr = str.trim();
// console.log(str);
// console.log(newstr);

// ---slice---
// let str = "01234567";
// console.log(str.slice(1, 5));

// ---concat---
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(str2));

// ---replace---
// let str = "hello";
// console.log(str.replace("lo", "p"));

// ---charAt---
let str = "IloveJS";
console.log(str.charAt(6));
