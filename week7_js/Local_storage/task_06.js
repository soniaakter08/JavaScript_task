/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here

const userProfile = {
  username: "Alice",
  email: "alice@gmail.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));
const returnedProfile = localStorage.getItem("userProfile");
const objectProfile = JSON.parse(returnedProfile);
objectProfile.preferences.theme = "dark";
console.log(objectProfile);

// const storedProfile = JSON.parse(localStorage.getItem("userprofile"));

// storedProfile.preferences.theme = "dark mode";

// //localStorage.setItem("userProfile", JSON.stringify(storedProfile));
// console.log(storedProfile);
