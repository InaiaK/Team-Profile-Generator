const inquirer =require("inquirer");

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
const employeeType = await inquirer.prompt(employeeTypeQuestion);

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
            type:"input",
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
const createEngineer = async () => {
    const engineerQuestions = [
        {
            type:"input",
            message:"Enter engineer name:",
            name:"name",
            validate:validateInput,
        },
        {
            type:"input",
            message:"Enter engineer ID:",
            name:"id",
            validate:validateInput,
        },
        {
            type:"input",
            message:"Enter engineer email:",
            name:"email",
            validate:validateInput,
        },

        {
            type:"input",
            message:"Enter engineer github profile:",
            name:"github",
            validate:validateInput,

        },
    ];

    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerAnswers);
    employee.push(engineer);
};


// intern function + array of questions 
const createIntern = async () => {
    const internQuestions = [
        {
            type:"input",
            message:"Enter intern name:",
            name:"name",
            validate:validateInput,
        },
        {
            type:"input",
            message:"Enter intern ID:",
            name:"id",
            validate:validateInput,
        },
        {
            type:"input",
            message:"Enter intern email:",
            name:"email",
            validate:validateInput,
        },

        {
            type:"input",
            message:"Enter intern school name:",
            name:"school",
            validate:validateInput,

        },
    ];

    const internAnswers = await inquirer.prompt(internQuestions);
    const intern = new Intern(internAnswers);
    employee.push(intern);
};

// function call to start app

init();




