// Pour afficher des valeurs en console
console.log("Hello world");
console.warn("Un warning");
console.error("Un warning");
console.table([1, 2, 3]);

// Pour simplement afficher un message en pop-up
globalThis.alert("Hello world");
// Pour afficher un message et récupérer une valeur textuelle 
let test = globalThis.prompt("Veuillez entrer un message");
// Pour afficher un message et récupérer une valeur booléenne 
let ouiOuNon = globalThis.confirm("Veuillez entrer un message");

// Convention de nommage:
// variables en 'camelCase' => jeSuisUneVariable
// constantes en 'SCREAMING_SNAKE_CASE' => JE_SUIS_UNE_CONSTANTE

let variableSansValeurPrealable; // valeur => 'undefined'
let variableAvecValeurAInitialisation = "valeur textuelle"; // valeur textuelle
let variableAvecValeurAInitialisationBis = 1_234; // valeur numérique
let variableAvecValeurAInitialisationTer = false; // valeur booléenne
let variableAvecValeurAInitialisationQua = [1, 2, true, "string"]; // valeur Array
let variableAvecValeurAInitialisationCin = undefined; // valeur non définie

// Ou en deux temps... Initialisation...
let variableCree;
// Puis affectation
variableCree = "Quelque chose";

// Pour les constantes, on est obligé de leur affecter une valeur à l'initialisation
const MA_CONSTANTE = "Valeur dés le début";

let unPrenom = globalThis.prompt("Veuillez entrer un prénom");

// On récupèrera forcément des chaines de caractères via prompt(), dont pour avoir un autre type de variable, on doit forcément passer par de la conversion 
let unAgeEnTexte = globalThis.prompt("Veuillez entrer un âge"); 

// Pour convertir une variable textuelle en valeur numérique, on peut utiliser l'objet Number via son constructeur tel que:
let unAgeEnChiffre = Number(unAgeEnTexte);