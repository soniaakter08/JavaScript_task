/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showinfo() {
    console.log(`username:${this.username},email2:${this.email}`);
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
const newUser = new User("Sonia", "asonia3308@gmail.com");
newUser.showinfo();
newUser.changeEmail("new email@gmail.com");
newUser.showinfo();
