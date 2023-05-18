let classes = [
    "Paladin",
    "Warriror",
    "Dark Knight",
    "Gunbreaker",
    "White Mage",
    "Scholar",
    "Astrologian",
    "Sage",
    "Monk",
    "Dragoon",
    "Ninja",
    "Samurai",
    "Reaper",
    "Bard",
    "Machinist",
    "Dancer",
    "Black Mage",
    "Summoner",
    "Red Mage",
    "Blue Mage"
  ];

let displayClasses = document.getElementById("classesDisplay");

//cette fonction selectionne un chiffre au hasard dans un paramètre liste
function random(array) {
  //Array.isArray(array) vérifie que c'est array est bien un tableau
  //console.log(Array.isArray(array)); //affiche dans la console
  if (Array.isArray(array)) {
      //return permet de renvoyer mon resultat
      return array[Math.floor(Math.random() * array.length)]; 
  }
}
//cette fonction utilise le chiffre de random et l'associe a classes (puis le retourne dans le html)
function randomClasses() {
  displayClasses.innerHTML = random(classes);
}
