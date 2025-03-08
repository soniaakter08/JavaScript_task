// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ["Fox", "Deer", "Owl", "Bear"];
let reserve2Animals = ["Bear", "Wolf", "Eagle", "Fox"];

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here

const commonSpecies = reserve1Animals.filter((animal) =>
  reserve2Animals.includes(animal)
);
commonSpecies.forEach((species) =>
  console.log(`common species are:${species}`)
);
