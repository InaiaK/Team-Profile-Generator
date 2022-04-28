


https://www.youtube.com/watch?v=31LhQkLcZvE

const inquirer = require("inquirer");

const fs = require("fs");
// create a markdown
const generateHTML = require("./utils/generateHTML")
// imported all classes
const Manager = require('./library/Manager')
const Employee = require('./library/Employee')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')


// prevents the user from empty string for any question.
const validateInput = (userInput) => {
    if (userInput === "") {
        return "Please type your answer.";
    } else {
        return true;
    };
}

const init = async () => {
    await createManager();
    while (!isTeamComplete) {
        const employeeTypeQuestion = [
            {
                type: "list",
                message: "Select the employee type:",
                name: "employeeType",
                choices: [
                    { name: "Engineer", value: "engineer", short: "Engineer" },
                    { name: "Intern", value: "intern", short: "Intern" },
                    { name: "None", value: "none", short: "None" },
                ],
            },
        ]
    }
}
// employee object will be generated
const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

if (employeeType === "none") {
    isTeamComplete = true;
} else {
    if (employeeType === "engineer") {
        await createEngineer();
    }
    if (employeeType === "intern") {
        await createIntern();
    }
}

//employees array + any erros with writing to the file.
const HTML = generateHTML(employee);
fs.writeFileSync("team profile.html",HTML,(err)=> {
    if (err){
        console.log(err);
    }else{
        console.log("HTML created");
    }
})

// manager function + array of questions
const createManager = async () =>{
    const managerQuestions =[
        {
            type:"input";
            message:"Enter manager name:",
            name:"name",
            validate:validateInput,
        },
        {
            type:"input",
            message:"Enter employee ID:",
            name:"id",
            validate:validateInput,
        },
        {
            type:"input",
            message:"Enter your office number:",
            name:"officeNumber",
            validate:validateInput,
        },

        {
            type:"input",
            message:"Enter work email:",
            name:"email",
            validate:validateInput,

        },
    ];

const managerAnswers = await inquirer.prompt(managerQuestions);
const manager = new Manager(managerAnswers);
employee.push(manager);
};

// engineer function + array of questions










// create a function for each one

const questions = (Employee) =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID? ',
            name: 'id',
        },
        {
            type: 'input',
            message: `What is your e-mail ?`,
            name: 'email'
        },
    ]);

const questions = (Engineer) =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID? ',
            name: 'id',
        },
        {
            type: 'input',
            message: `What is your e-mail ?`,
            name: 'email'
        },
    ]);
