//Initial data:
let teamMembers = ["John", "Emily", "Mike", "Sarah"];

//1. Loop through the `teamMembers` array and log each name to the console.

console.log("Team members are:");
teamMembers.forEach((member) => console.log(member));

//2. Remove the first member of the array.
teamMembers.shift();
console.log("Remove the first member of array:");
teamMembers.forEach((member) => console.log(member));

//3. Remove the last member of the array.

teamMembers.pop();

//4. Add a new member "Alex" to the front of the array.

teamMembers.unshift("Alex");

//5. Append a new member "Linda" to the end of the array.

teamMembers.push("Linda");

//6. Create a new array that excludes the first two members, keeping the original array unchanged.

const newteamMembers = teamMembers.slice(2);

//7. Find the index of "Mike" in the array.

const mikeIndex = teamMembers.indexOf("Mike");
console.log("The index of Mike is:", mikeIndex);

//8. Try to find the index of "Jake" (who is not in the array).

let jakeIndex = teamMembers.indexOf("Jake");
console.log("The index of jake is:", jakeIndex);

//9. Replace "Mike" with "Carol" and "Bruce" in the same position.
if (mikeIndex !== -1) {
  teamMembers.splice(mikeIndex, 1, "Carol", "Bruce");
}
console.log("After replace the names:", teamMembers);

//10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.

const extendTeamMembers = teamMembers.concat("Bob");
console.log("After concate:", extendTeamMembers);

//11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
const copiedTeamMembers = teamMembers.slice();
console.log("After copied:", copiedTeamMembers);

//12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.

const newMembers = ["Tina", "Dean"];
const mergeTeamMembers = teamMembers.concat(newMembers);
console.log("After merged:", mergeTeamMembers);

//13. Find all occurrences of "John" in the array and store their positions in a new array.
let indexOfJohn = [];
newMembers.map((name, index) => {
  if (name === "John") {
    indexOfJohn.push(index);
  }
});
console.log("Occurance of John:", indexOfJohn);

//14. Transform all names in the array to be uppercase while keeping the original array unchanged.

const upperCaseNames = teamMembers.map((name) => name.toUpperCase());
console.log("Uppercase :", upperCaseNames);

//15. Sort `teamMembers` in alphabetical order.

const sortedTeam = [...teamMembers].sort();
console.log("After sorted:", sortedTeam);

//16. Reverse the `teamMembers` array.
const reverseTeams = [...teamMembers].reverse();
console.log("After reversed:", reverseTeams);

//17. Check if at least one member in the array is named "John".
const hasJohn = teamMembers.includes("Jhon");
console.log("Check array includes John:", hasJohn);

//18. Check if all names in the array have more than three letters.
const everyNameHaveMoreThanThreeLetter = teamMembers.every(
  (name) => name.length > 3
);
console.log(
  "Name has more than three letter:",
  everyNameHaveMoreThanThreeLetter
);
