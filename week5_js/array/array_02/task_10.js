// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/
// Write your code here

let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
const giraffeIndex = zooAnimals.indexOf("Giraffe");

if (giraffeIndex !== -1) {
  zooAnimals[giraffeIndex] = "Cheetah";
}
console.log(zooAnimals);
