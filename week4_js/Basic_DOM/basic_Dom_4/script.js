/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */
const button = document.querySelector("#btn");
const text = document.querySelector("#p");

function toggle1() {
  if (text.style.visibility === "hidden") {
    text.style.visibility = "visible";
  } else {
    text.style.visibility = "hidden";
  }
}

const toggle2 = () => {
  text.style.display === "none"
    ? (text.style.display = "block")
    : (text.style.display = "none");
};
button.addEventListener("click", toggle2);

function toggle() {
  if (text.innerHTML === "") {
    text.innerHTML = "WELCOME BACK";
  } else {
    text.innerHTML = "";
  }
}
