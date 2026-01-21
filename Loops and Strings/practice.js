// Question-1. Print all even numbers from 0 to 100

// for (let n = 0; n <= 100; n++) {
//   if (n % 2 === 0) {
//     console.log(n);
//   }
// }

// Question- 2. Create a game where you start with any random game number. Ask the user to keep gussing the game number until the user enter correct value.

let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while (userNum != gameNum) {
  userNum = prompt("You entered worng number. Guess again : ");
}
console.log("Congratulations, you entered the right number");
