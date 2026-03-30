
// Pour récupérer des éléments dans le DOM, on peut passer par les méthodes de type .getElementById, .getElementsByClassName, .getElementsByTagName
const clickMeButtonElement = document.getElementById("btn-click-me");
const liElements = document.getElementsByClassName("ma-class");

// Ou bien utiliser les querySelector / querySelectorAll
const clickMeButtonElementBis = document.querySelector("#btn-click-me");
const liElementsBis = document.querySelectorAll(".ma-class");

const monInput = document.querySelector('#mon-input');
const maDiv = document.querySelector('#ma-div');
const monUl = document.querySelector('#mon-ul');

console.log(clickMeButtonElement);
console.log(liElements);

function sayHello() {
  console.log('Hello world!');
}
const sayHelloBis = () => {
  console.log('Hello world!');
}

// Pour provoquer du comportement, on va se brancher sur les évènements du DOM et y fixer une fonction qui aura lieu à chaque fois que cet évènement est levé.
clickMeButtonElement.addEventListener('click', sayHello);
clickMeButtonElementBis.addEventListener('click', () => {
  const newLiElement = document.createElement('li');
  newLiElement.textContent = "New element";
  monUl.appendChild(newLiElement)
});


// Les évènements sont des objets fourni automatiquement par le navigateur, qu'il est possible d'exploiter pour récupérer par exemple: 
// * L'Objet d'évènement complet
// * L'Objet du DOM qui a levé l'évènement avec son `.target`
// * L'attribut de l'élément ayant levé l'évènement si on descend plus loin encore
monInput.addEventListener('input', (event) => {
  // console.log(event); // évènement complet
  // console.log(event.target); // élément HTML qui a levé l'évènement
  console.log(event.target.value); // la valeur de l'input qui est en court de frappe
})

// Pour créer des éléments dans le DOM, on peut le faire via la méthode .createElement()
const newImgElement = document.createElement('img');
newImgElement.src = "https://picsum.photos/200/200";
newImgElement.alt = "Random picture";

// <img src="https://picsum.photos/200/200" alt="Random picture"> => Pour le moment que dans le DOM

// Pour ajouter des éléments à l'intérieur d'autres éléments du DOM, on peut utiliser la méthode .appendChild()
maDiv.appendChild(newImgElement)
