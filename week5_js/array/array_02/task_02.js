// Exercise 2: Iterate over the planets array and log each planet with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here

planets.forEach((planet) =>
  console.log(`Planet: ${planet} Index: ${planets.indexOf(planet)}`)
);
