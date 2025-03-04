// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here

mixedValues.forEach((item, index) => {
  console.log(`Item:${item}, Index:${index}, Type:${typeof item}`);
});
