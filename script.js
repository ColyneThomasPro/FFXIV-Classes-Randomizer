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

  function random (list) {
    //Array.isArray(list) vérifie que c'est list est bien un tableau
    //console.log(Array.isArray(list)); //affiche dans la console
    if (Array.isArray(list)) {

        let resultat = list[Math.floor(Math.random() * list.length)]; 
        return resultat;
    }
}

let displayClasses = document.getElementById("classesDisplay");
displayClasses.innerHTML = random(classes);

console.log(random(classes)); 