/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;

  this.increaseSalary = function (percent) {
    this.salary += this.salary * (percent / 100);
  };
}

const employee1 = new Employee("John Doe", "Software Engineer", 50000);
document.getElementById("employee-name").textContent = employee1.name;
document.getElementById("employee-position").textContent = employee1.position;
document.getElementById("employee-salary").textContent = employee1.salary;

document.getElementById("increase-btn").addEventListener("click", () => {
  employee1.increaseSalary(10);
  document.getElementById("employee-salary").textContent = employee1.salary;
});
