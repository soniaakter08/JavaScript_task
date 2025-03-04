/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User(username, email) {
  this.username = username;
  this.email = email;
  this.showinfo = function () {
    console.log(`username:${username},email:${email}`);
  };
}
const newUser = new User("Sonia", "asonia@gmail.com");
newUser.showinfo();
