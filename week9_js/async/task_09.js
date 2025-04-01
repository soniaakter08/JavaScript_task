/* Task 9: Fetch Product Details (Async/Await)  
---------------------------------------
Convert `fetchProductDetails(hasError)` to use `async/await`  
If `hasError === false`, wait **3 sec** and return `"Product details retrieved"`  
If `hasError === true`, wait **3 sec** and throw `"Error loading product"`  
Use **try/catch** to handle errors  
*/

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchProductDetails(hasError) {
  try {
    await delay(3000);

    if (hasError) {
      throw new Error("Error loading product");
    }

    return "Product details retrieved";
  } catch (error) {
    throw error;
  }
}

// Test Cases
fetchProductDetails(false).then(console.log).catch(console.error);
// Expected: "Product details retrieved" (after 3 sec)
fetchProductDetails(true).then(console.log).catch(console.error);
// Expected: "Error loading product" (after 3 sec)
