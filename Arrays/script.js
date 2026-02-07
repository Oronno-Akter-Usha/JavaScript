//-----Array-----
// let marks = [90, 78, 57, 65, 40];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["ironman", "thor", "hulk", "spiderman"];
// console.log(heroes);

// -----Indices----
// let marks = [90, 78, 57, 65, 40];
// marks[0] = 99;
// console.log(marks);
// console.log(marks[0]);

// -----looping over arrays----
// let heroes = ["ironman", "thor", "hulk", "spiderman"];
// for loop
// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

// for of
// for (let hero of heroes) {
//   console.log(hero);
// }

// -----Arrays Methods-----

// ---push() : add to end---
// let foodItems = ["apple", "potato", "litchi", "tomato"];
// console.log(foodItems);
// foodItems.push("chips", "burger");
// console.log(foodItems);

// ---pop() : delete from end & return---
// let foodItems = ["apple", "potato", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);

// ---toString() : converts array to string---
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let marks = [98, 78, 56, 34];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);
// console.log(marks);
// console.log(marks.toString());

// ---concat() : joins multiple arrays & returns result---
// let marvelHeros = ["thor", "spiderman", "ironman"];
// let dclHeros = ["superman", "batman"];
// let heroes = marvelHeros.concat(dclHeros);
// console.log(heroes);

// ---unshift() : add to start
// let marvelHeros = ["thor", "spiderman", "ironman"];
// marvelHeros.unshift("antman");
// console.log(marvelHeros);

// ---shift() : delete from start & return---
// let marvelHeros = ["thor", "spiderman", "ironman"];
// marvelHeros.shift();
// console.log(marvelHeros);

// ---slice() : returns a piece of the array
// slice(startIdx, endIdx)
let marvelHeros = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];
console.log(marvelHeros);
console.log(marvelHeros.slice(1, 3));
