/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  } else {
    console.log("Property not found");
  }
}
checkProperty({ name: "Bob", age: 30 }, "name");
checkProperty({ name: "Bob", age: 30 }, "email");
