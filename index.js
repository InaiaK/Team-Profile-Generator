const inquirer = require("inquirer");

const fs = require("fs");
// create a markdown
const generateHTMLTemplate = require("./utils/generateHTML")
// imported all classes
const Manager = require('./library/Manager')
const Employee = require('./library/Employee')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern');
const { start } = require("repl");
let employeeDB=[]

// prevents the user from empty string for any question.
const validateInput = (userInput) => {
    if (userInput === "") {
        return "Please type your answer.";
    } else {
        return true;
    };
}

const init = async () => {
 

    inquirer.prompt([
        {
            type: "list",
            message: "Select the employee type:",
            name: "employeeType",
            choices: [
                { name: "Engineer", value: "1", short: "Engineer" },
                { name: "Intern", value: "2", short: "Intern" },
                { name: "I don't want to add any more team member", value: "3", short: "None" },
            ],
        },
    ]).then(employee => {
        switch (employee.employeeType) {
            case "1":
                createEngineer();
                break;
            case "2":
                createIntern();
                break;
            case "3":
                generateHTML();

        }
    })

}



//employees array + any erros with writing to the file.
const  generateHTML =async() =>{
    console.log(employeeDB)
let HTML = await generateHTMLTemplate(employeeDB)
console.log(HTML)
fs.writeFileSync("teamprofile.html", HTML, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("HTML created");
    }
})
}
// manager function + array of questions
const createManager = async () => {
    const managerQuestions = [
        {
            type: "input",
            message: "Enter manager name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter your office number:",
            name: "officeNumber",
            validate: validateInput,
        },

        {
            type: "input",
            message: "Enter work email:",
            name: "email",
            validate: validateInput,

        },
    ];

    const{ name,id,email,officeNumber} = await inquirer.prompt(managerQuestions);
    const manager = new Manager(name,id,email,officeNumber);
    employeeDB.push(manager); 
};

// engineer function + array of questions
const createEngineer = async () => {
    const engineerQuestions = [
        {
            type: "input",
            message: "Enter engineer name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter engineer ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter engineer email:",
            name: "email",
            validate: validateInput,
        },

        {
            type: "input",
            message: "Enter engineer github profile:",
            name: "github",
            validate: validateInput,

        },
    ];

    const {name,id,email,github}  = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(name,id,email,github);
    employeeDB.push(engineer);
    init()
};


// intern function + array of questions 
const createIntern = async () => {
    const internQuestions = [
        {
            type: "input",
            message: "Enter intern name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern email:",
            name: "email",
            validate: validateInput,
        },

        {
            type: "input",
            message: "Enter intern school name:",
            name: "school",
            validate: validateInput,

        },
    ];

    const {name,id,email,school} = await inquirer.prompt(internQuestions);
    const intern = new Intern(name,id,email,school);
    employeeDB.push(intern);
    init()
};

// function call to start app

const startApp = async () => {
    await createManager();
    init(

    )
}



startApp()