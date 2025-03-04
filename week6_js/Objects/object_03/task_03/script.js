/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here

let theme = {
  name: "light",
  isActive: true,
};

const themeBtn = document.getElementById("button");
themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  if (theme.isActive === false) {
    theme.isActive = true;
    return (document.body.style.backgroundColor = "#fff");
  }
  if (theme.isActive === true) {
    theme.isActive = false;
    return (document.body.style.backgroundColor = "#000");
  }
}
