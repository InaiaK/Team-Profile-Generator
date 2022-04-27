const Manager = require('./library/Manager')
const Employee = require('./library/Employee')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')

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
        