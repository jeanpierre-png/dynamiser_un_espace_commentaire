// Création de nouvelles variables

let formElement = document.getElementById("form");
let firstNameElement = document.getElementById("first-name");
let lastNameElement = document.getElementById("last-name");
let messageElement = document.getElementById("message");
let errorElement = document.getElementById("error-message");
let list = document.getElementById("comment-list");
let newDiv = document.createElement("div");
let newDiv2 = document.createElement("div");
let newDiv3 = document.createElement("div");
let newH3 = document.createElement("h3");
let newParagraphe = document.createElement("p");

// Comportement du Formulaire

formElement.addEventListener("submit", function (ev) {
  ev.preventDefault();

  if (!firstNameElement.value || !lastNameElement.value || !messageElement.value) {
    error();

  } else {
    errorElement.remove();

    newComments();
  }
  if (firstNameElement.value && lastNameElement.value && messageElement.value) {
    deleteValue();
  }

});

// Appel de la fonction error si les champs sont vides

function error() {
  errorElement.style.display = "block";
}

// Appel de la fonction newComments une fois tous les champs remplir

function newComments() {

  // La création de nœud de texte avec les données tape sur l'utilisateur

  let newH3Text = document.createTextNode(firstNameElement.value + "   " + lastNameElement.value);
  let newParagrapheText = document.createTextNode(messageElement.value);

  // Récupère les class CSS

  newDiv.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
  newDiv2.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
  newDiv3.classList.add( "prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
  newH3.classList.add("font-medium", "text-gray-900");

  // Ajoute les nœuds dans le DOM

  list.appendChild(newDiv);
  newDiv.appendChild(newDiv2);
  newDiv2.appendChild(newH3);
  newDiv2.appendChild(newDiv3);
  newH3.appendChild(newH3Text);
  newDiv3.appendChild(newParagraphe);
  newParagraphe.appendChild(newParagrapheText);
}

// Supprime les données des champs tapes après soumission du formulaire

function deleteValue() {

  firstNameElement.value = "";
  lastNameElement.value = "";
  messageElement.value = "";

}
