// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
// Write your code here
let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
const penguinIndex = zooAnimals.indexOf("Penguin");
console.log(`Index of Penguin is:${penguinIndex}`);

if (penguinIndex === -1) {
  console.log("Penguin is not in the zoo.");
} else {
  console.log(`Index of Penguin is:${penguinIndex}`);
}
