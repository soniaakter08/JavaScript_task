/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
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

moviesObjects.forEach((moviesObjects) => {
  if (moviesObjects.rating > 8)
    console.log("The title of the movie is:", moviesObjects.title);
});
