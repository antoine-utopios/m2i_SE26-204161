console.log("Hello world");

let unAge = Number(globalThis.prompt("Veuillez entrer un âge"));

// Les Opérateurs de comparaison
// Inférieur à => x < y
// Supérieur à => x > y
// Inférieur ou égal à => x <= y
// Supérieur ou égal à => x >= y
// Différence => x != y
// Egalité simple => x == y
// Egalité avec vérification de type => x === y

// Les Opérateurs logiques
// ET => x && y
// OU => x || y
// NOT => !x

// STRUCTURES CONDITIONNELLES

// if...else if...else
  
  if (unAge < 18) {
    globalThis.alert("Vous êtes mineur !");
  } else if (unAge < 21 && unAge >= 18) {
    globalThis.alert("Vous êtes majeur en France !");
  } else {
    globalThis.alert("Vous êtes majeur aux USA et ailleurs !");
  }
  
  // switch...case

let inputUser = globalThis.prompt("Veuillez choisir entre A, B, C et D");

switch (inputUser) {
  case "A":
    globalThis.alert("Vous avez choisi la réponse A");
    break;
  case "B":
      globalThis.alert("Vous avez choisi la réponse B");
  break;
  case "C":
    globalThis.alert("Vous avez choisi la réponse C");
  break;
  case "D":
    globalThis.alert("Vous avez choisi la réponse D");
  break;
  default:
    globalThis.alert("Vous devez choisir entre les 4 bonnes réponses (A, B, C ou D)");
  break;
}

// STRUCTURES CONDITIONNELLES

// while...

let aNumber = 0;

while (aNumber != 5) {
  aNumber = Number(globalThis.prompt("Veuillez entrer le nombre 5 pour passer à la suite..."));
}

aNumber = 5;

// do...while...

do {
  aNumber = Number(globalThis.prompt("Veuillez entrer le nombre 5 pour passer à la suite..."));
} while (aNumber != 5);

// for...

for(let i = 0; i < 5; i++) {
  console.log("Itérateur: " + i);
}

// for...of... (Pour parcourir les Array)

const AN_ARRAY = [1, 2, 3, 4, 5];

for (const element of AN_ARRAY) {
  console.log("Element en cours de parcourt:", element);
}

// for...in...(Pour parcourir les Object)
const AN_OBJECT = {
  keyA: "Value",
  keyB: 123,
  keyC: true
};

for (const key in AN_OBJECT) {
  console.log(`key: ${key}, value: ${AN_OBJECT[key]}`);
};