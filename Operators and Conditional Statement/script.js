// --Artimetic Operators--
// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b =", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// --Unary Operators--
// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b =", b);
// console.log("++a =", ++a); //6 (++a= pre)
// console.log("a++ =", a++); //5(a++ = post)
// console.log("a = ", a); //6

// --Assignment Operators--
// let a = 5;
// let b = 2;

// a += 4; // a = a + 4
// console.log("a = ", a);
// a -= 4;
// console.log("a = ", a);
// a *= 4;
// console.log("a = ", a);
// a /= 4;
// console.log("a = ", a);
// a %= 4;
// console.log("a = ", a);
// a **= 4;
// console.log("a = ", a);

// --Comparison Operators--
// let a = 5;
// let b = 3;

// console.log("a == b", a == b);
// console.log("a != b", a != b);
// console.log("a === b", a === b);
// console.log("a !== b", a !== b);
// console.log("a > b", a > b);
// console.log("a < b", a < b);
// console.log("a >= b", a >= b);
// console.log("a <= b", a <= b);

// --Logical Opertors--
// let a = 6;
// let b = 5;

// let cond1 = a < b;
// let cond2 = a === 6;
// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log(" =", a < b && a === 6);
// console.log("cond1 || cond2 =", a < b || a === 6);
// console.log("!(6<5)", !(a === 6));

// --Conditional Statment--

// --if Statment--
// let age = 18;
// if (age >= 18) {
//   console.log("You can vote");
// }

// if (age < 18) {
//   console.log("You cannot vote");
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "white";
// }
// console.log(color);

// --if-else Statment--
// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }
// console.log(color);

// --odd or even--
// let num = 100;
// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

// else-if Statment

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }
// console.log(color);

// if (mode === "dark") {
//   console.log(mode);
// }

// --Ternary Opreator--
let age = 17;

let result = age > 18 ? "adult" : "not adult";
console.log(result);
