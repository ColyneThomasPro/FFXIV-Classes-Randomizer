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

// This function selects a random number from a given array
function random(array) {
  // Array.isArray(array) checks if the variable 'array' is indeed an array
  // console.log(Array.isArray(array)); // displays in the console
  if (Array.isArray(array)) {
      // The 'return' statement allows us to return the result
      return array[Math.floor(Math.random() * array.length)]; 
  }
}
// This function uses the random number and associates it with 'classes' (then returns it to the HTML)
function randomClasses() {
  displayClasses.innerHTML = random(classes);
}
