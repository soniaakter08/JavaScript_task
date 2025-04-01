/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.clear();
      console.log("LocalStorage cleared.");
    } else {
      console.error("LocalStorage is not available.");
    }
  } catch (error) {
    console.error("Error clearing storage:", error.message);
  }
}

clearStorage();
