/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
  try {
    localStorage.clear();
    console.log("Local storage cleared");
  } catch (error) {
    console.log("Error clearing Message:", error.message);
  }
}
clearStorage();
