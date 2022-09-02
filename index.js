import inquirer from "inquirer";
import con from "./config/connection.js";
import cTable from "console.table";

const menueQuestions = {
  type: "list",
  name: "menuAnswer",
  message: "What would you like to do?",
  choices: [
    "View all Employees",
    "Add Employee",
    "Update Employee Role",
    "View all Roles",
    "Add Role",
    "View all Departments",
    "Add a Department",
    "exit",
  ],
};

function viewMenu() {
  inquirer.prompt(menueQuestions).then((menuSelection) => {
    console.log(menuSelection);
    switch (menuSelection.menuAnswer) {
      case "View all Employees":
        viewAllEmployees();
        console.log("View all Employees");
        break;

      case "Add Employee":
        console.log("Add Employee");
        break;

      case "Update Employee Role":
        console.log("Update Employee Role");
        break;

      case "View all Roles":
        viewAllRoles();
        console.log("View all Roles");
        break;

      case "Add Role":
        console.log("Add Role");
        break;

      case "View all Departments":
        viewAllDepartments();
        console.log("View all Departments");
        break;

      case "Add a Department":
        // addADepartment();
        console.log(menuSelection);
        console.log("Add a Department");
        break;

      case "exit":
        console.log("exit");
        break;

      default:
        console.log("something's not right");
        break;
    }
  });
}

const viewAllDepartments = () => {
  con.query("SELECT * FROM department", (err, departments) => {
    console.table(departments);
    viewMenu();
  });
};

const viewAllEmployees = () => {
  con.query("SELECT * FROM employee", (err, employees) => {
    console.table(employees);
    viewMenu();
  });
};

const viewAllRoles = () => {
  con.query("SELECT * FROM role", (err, roles) => {
    console.table(roles);
    viewMenu();
  });
};

//ADD FUNCTIONS NEED UPDATE
//const addADepartment = (departmentName) => {
//con.query(
//     "INSERT INTO department (name) values (?)",
//     departmentName,
//     (err, department) => {
//       console.log(department);
//     }
//   );
//   viewMenu();
// };

viewMenu();
