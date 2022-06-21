const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
//empty array to push all answers to
const employeesArr = [];

// const { create } = require("domain");
// const question = [{
//     type: "input",
//     name: "name",
//     message: "What is your Engineer's name?",
// }, ];

function getInternInfo() {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your Intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your Intern's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your Intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is your Intern's school name?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            // console.log(intern);
            otherEmployees();
            employeesArr.push(intern);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // console.log(error);
            }
        });
}

function getManagerInfo() {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                // everything after the dot is the value, not the key.
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            // console.log(manager);
            employeesArr.push(manager);
            otherEmployees();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // console.log(error);
            }
        });
}
getManagerInfo();

function otherEmployees() {
    return inquirer
        .prompt([{
            type: "list",
            name: "option",
            message: "What would you like to do next?",
            choices: ["Engineer", "Intern", "Done"],
        }, ])
        .then((option) => {
            if (option.option === "Engineer") {
                getEngineerInfo();
            } else if (option.option === "Intern") {
                // console.log("Intern");
                getInternInfo();
            } else {
                console.log(employeesArr);
                buildTeam(employeesArr);
            }

            // DO I ENVOKE THE MANGER HTML FUNCTIONS HERE?
        });
}

function getEngineerInfo() {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is your Engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your Engineer's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your Engineer's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your Engineer's Github?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            // console.log(engineer);
            employeesArr.push(engineer);
            otherEmployees();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // console.log(error);
            }
        });
}

// function createFile(fileName, data) {
//     fs.writeFile(fileName, data, "utf8", (err) => {
//         if (err) throw err;
//         console.log("File Created!");
//     });
// }

//CREATE THE DIVS FOR THE MANAGER, INTERN, AND ENGINEER
const buildTeam = (team) => {
    let managerHtmlBody = "";
    let engineerHtmlBody = "";
    let internHtmlBody = "";
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            let managerHtml = `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">MANAGER<img src="manager.png" class="sticker" /></div>
                    <h3 class="card-title"><span class="secondary">Name:</span> ${
                      team[i].name
                    }</h3>
                        <h5 class="card-text"><span class="secondary">Employee ID:</span> ${
                          team[i].id
                        }</h5>
                        <h5 class="card-text"><span class="secondary">Email:</span> ${
                          team[i].email
                        }</h5>
                    <h5 class="card-text"><span class="secondary">Office Number:</span> ${team[
                      i
                    ].getOfficeNumber()}</h5>
                    </div>
                    `;
            managerHtmlBody += managerHtml;
        } else if (team[i].getRole() === "Engineer") {
            let engineerHtml = `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                 <div class="card-header">ENGINEER<img src='manager.png'/></div>
                <h3 class="card-title"><span class="secondary">Name:</span> ${team[i].name}</h3>
                        <h5 class="card-text"><span class="secondary">Employee ID:</span> ${team[i].id}</h5>
                        <h5 class="card-text"><span class="secondary">Email:</span> ${team[i].email}</h5>
                <h5 class="card-text"><span class="secondary">Github:</span> ${team[i].github}</h5>
                </div>`;
            engineerHtmlBody += engineerHtml;
        } else if (team[i].getRole() === "Intern") {
            let internHtml = `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">INTERN<img src="manager.png" class="sticker" /></div>
                        <h3 class="card-title"><span class="secondary">Name:</span> ${team[i].name}</h3>
                        <h5 class="card-text"><span class="secondary">Employee ID:</span> ${team[i].id}</h5>
                        <h5 class="card-text"><span class="secondary">Email:</span> ${team[i].email}</h5>
                        <h5 class="card-text"><span class="secondary">School/University:</span> ${team[i].school}</h5>
                        </div>`;
            internHtmlBody += internHtml;
        }
    }
    fs.writeFileSync(
        "./dist/index.html",
        generateHtml(managerHtmlBody, engineerHtmlBody, internHtmlBody)
    );
};

// Should I pass in the getManagerInfo() here???
// How do I create an HTML with a manager, intern, and engineer column that only takes in this information?
// const generateHtml = (manager, intern, engineer) => {
//     if(manager === getRole(manager)){

//     }
//     return `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="style.css" />
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
//     <title>Employees</title>
// </head>

// <body>
// <h1 class="title"> Meet the Team! </h1>
//     <div class=wrapper>
//     <h2 class="role">Manager${(manager)}</h2>
//     <h2 class="role">Engineer${engineer}</h2>
//     <h2 class="role">Intern${intern}</h2>
//     </div>
// </body>

// </html>`;
// };

// CREATE 3 SEPERATE FUNCTIONS THAT GENERATE A MANAGER, INTERN, AND ENGINEER CARD AND THEN CALL THAT FUNCTION INSIDE THE TEMPLATE LITERALS.
// I did not do this, instead I created 3 seperate html bodies
const generateHtml = (manager, engineer, intern) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <title>Employees</title>
</head>

<body>
<h1 class="title"> Meet the Team! </h1>
    <div class=wrapper>
    <h2 class="role">Manager${manager}</h2>
        

    </div>
    <div class=wrapper>
        <h2 class="role">Engineer${engineer}</h2>
           

    </div>
    <div class=wrapper>
   
            <h2 class="role">Intern${intern}</h2>

    </div>
</body>

</html>`;
};