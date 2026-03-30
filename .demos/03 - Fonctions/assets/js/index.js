function nomDeFonction() {
  console.log("nomDeFonction vient d'être appelé !");
}

const nomDeFonctionBis = () => {
  console.log("nomDeFonctionBis vient d'être appelé !");
};

function nomDeFonctionAvecRetour() {
  console.log("nomDeFonctionAvecRetour vient d'être appelé !");
  return "Valeur";
  // Instructions qui n'auront jamais lieu car placées après le mot clé retour
}

const nomDeFonctionAvecRetourBis = () => {
  console.log("nomDeFonctionAvecRetourBis vient d'être appelé !");
  return "Valeur";
};

function nomDeFonctionAvecParams(nbA, nbB) {
  console.log("nomDeFonctionAvecParams vient d'être appelé !");
  console.log("nbA", nbA);
  console.log("nbB", nbB);  
}

const nomDeFonctionAvecParamsBis = (nbA, nbB) => {
  console.log("nomDeFonctionAvecParamsBis vient d'être appelé !");
  console.log("nbA", nbA);
  console.log("nbB", nbB);  
};

let maValeur = nomDeFonctionAvecRetour();