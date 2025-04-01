/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function task9(malformedURI) {
  try {
    const decodedURI = decodeURIComponent(malformedURI);
    console.log(decodedURI);
  } catch (error) {
    if (error instanceof URIError) {
      console.error("URI Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
  }
}

task9("https%3A%2F%2Fexample.com");
task9("%");
