/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const userName = document.querySelector("#userName");
const emailId = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const message = document.querySelector("#message");

function formValidation(event) {
  event.preventDefault();
  const userName = document.querySelector("#userName").value;
  const emailId = document.querySelector("#email").value;

  if (userName === "" || emailId === "") {
    message.textContent = "Please enter the mandatory detaits.";
    return;
  } else if (userName.length < 3) {
    message.textContent = "Username must be atleast Three characters.";
    message.style.color = "red";
    return;
  } else if (!emailId.includes("@")) {
    message.textContent = "Please enter a valid email id.";
    return;
  } else {
    message.textContent = "User registered successfully.";
    console.log(`User Name: ${userName}`);
    console.log(`Email: ${emailId}`);
    message.style.color = "green";
    return;
  }
}
submitBtn.addEventListener("click", formValidation);
