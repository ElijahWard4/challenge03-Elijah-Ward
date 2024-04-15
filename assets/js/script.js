// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
   let employeesArray = [];
   //new variable to add a new employees which is true
   let newEmployee = true
   //while we add our new employee we need to prompt their first/last and salary be entered 
   while(newEmployee) {
    let firstName = prompt("This is the employees first name: ");
    let lastName = prompt("This is the employees last name: ");
    //salary has to be set as a number in the prompt for calculating average later
    let salary = Number(prompt("This is the employees salary: "));
    //if salary is not a number then it is 0
    if (isNaN(salary)){
      salary = 0;
    }
    // then i need to log what information was prompted
    console.log(firstName);
    console.log(lastName);
    console.log(salary);
    
    //create the employee based off our newEmployee information
    let employee = {"firstname": firstName, "lastname": lastName, "salary": salary};
    //then we log employee and push so it renders to next page 
    //console.log(employee) ---i dont think i need this lol
    employeesArray.push(employee)
    console.log(employeesArray)
    //we need more employees so set newEmployee 
    //found the function command confirm from google  
    newEmployee = confirm("Would you like to add another employee? ")
   }
   return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //initially salary and employees are 0 until entered in prompt
  let salaries = 0;
  let howManyEmployees = 0;
  //need to loop back through the array 
  for (let i = 0; i < employeesArray.length; i++) 
    //add salaries to the arrays number of the salary
    salaries += employeesArray[i].salary
    howManyEmployees = employeesArray.length
    average = salaries / howManyEmployees
    //i love if statements cause i never know if an if will do what i want, if only... OMG IT WORKS YESSS
    if(howManyEmployees > 1) {
      //employees greater than i so log how many employees based off the array with their salary
      console.log(`There are, ${employeesArray.length} employees with an average salary of ${average}.`)
    }
    else if(howManyEmployees == 1){
      console.log(`there are,${employeesArray.length} employee with a salary of ${average}.`)
    }
  return employeesArray
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //TODO: Select and display a random employee
  let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  // get the random employee
  let employeeLastName = employeesArray[randomEmployee];
  console.log(employeeLastName);
  //Couldnt solve getting the random employee yet, ive spent more than 20 hours on this challenge and im super stoked to have gotten this far. For now this will be my submission!!! YES!
  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);