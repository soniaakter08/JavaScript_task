/* 
Task 7: Fetch User Data (Async/Await)  
---------------------------------------
Convert `fetchUserDataAsync(shouldFail)` to use `async/await`  
If `shouldFail === false`, wait **2 sec** and return `"User data loaded"`  
If `shouldFail === true`, wait **2 sec** and throw `"Failed to fetch data"`  
*/

async function fetchUserDataAsync(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        resolve("User profile loaded");
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

fetchUserDataAsync(false).then(console.log).catch(console.error);
fetchUserDataAsync(true).then(console.log).catch(console.error);
