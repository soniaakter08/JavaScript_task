/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
const movies = [
  { title: "abc", director: "Ron", rating: 8 },
  { title: "bc", director: "Roni", rating: 9 },
  { title: "a", director: "Ronit", rating: 7 },
  { title: "c", director: "Roky", rating: 9 },
];
const jsonArray = JSON.stringify(movies);
const moviesObjects = JSON.parse(jsonArray);

function filterHighRatedMovies(jsonString) {
  return moviesObjects.filter((movieObject) => movieObject.rating > 8);
}
console.log("The movie array list is:", filterHighRatedMovies(moviesObjects));
