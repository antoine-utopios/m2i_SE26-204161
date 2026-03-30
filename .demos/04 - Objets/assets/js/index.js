let unPrenom = "John"; 
let unNom = "DUPONT"; 
let unAge = 22; 
let unNumeroDeTelephone = "+33 123 456 789"; 

let unePersonne = {
  prenom: "John",
  nom: "DUPONT",
  age: 16,
  numeroDeTelephone: "+33 123 456 789",
  afficheNomComplet () {
    console.log("Je m'appelle", this.prenom, this.nom);
  }
};