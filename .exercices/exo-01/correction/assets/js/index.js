let endLoop = "";
const users = [];

while (endLoop != "STOP") {
  const userLastName = globalThis.prompt("Veuillez entrer le NOM de l'utilisateur"); 
  const userFirstName = globalThis.prompt("Veuillez entrer le PRENOM de l'utilisateur"); 
  const userEmail = globalThis.prompt("Veuillez entrer l'EMAIL de l'utilisateur"); 
  const userPhone = globalThis.prompt("Veuillez entrer le NUMERO DE TELEPHONE de l'utilisateur"); 

  const newUser = {
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    phoneNumber: userPhone
  };

  users.push(newUser);

  endLoop = globalThis.prompt("Voulez vous continuer ? Entrez STOP pour mettre fin à la saisie des utilisateurs");
}

for (let i = 0; i < users.length; i++) {
  console.log(`Utilisateur n°${i + 1}: {Nom: ${users[i].lastName}, Prénom: ${users[i].firstName}, Email: ${users[i].email}, Téléphone: ${users[i].phoneNumber}`);
}