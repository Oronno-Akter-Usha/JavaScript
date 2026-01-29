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
let heroes = ["ironman", "thor", "hulk", "spiderman"];
// for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// for of
for (let hero of heroes) {
  console.log(hero);
}
