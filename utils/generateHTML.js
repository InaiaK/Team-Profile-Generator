const fs = require("fs");
const path = require("path");
const templatesDir = path.resolve(__dirname, "../templates");
let template = ""

const generateHTML = async (employees) => {

  const HTML = [];
  // The objects in the employees array will be filtered by role.

  await employees.forEach(employee => {
    if (employee.getRole() === "Manager") {
      renderManager(employee)
    }
    else if (employee.getRole() === "Engineer")
      renderEngineer(employee)

    else if (employee.getRole() === "Intern")
      renderIntern(employee)
  })

  //console.log(HTML,"generateHTML.js");
  // he object in the html array are then joined & passed into the render full markdown.
  return renderFullMarkdown();
};

const renderManager = (manager) => {
  console.log(manager)
  // let maanger = manager.name
  template += ` <div class="col mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">"${manager.getName()}</h5>
        <p class="card-text">ID:${manager.getId()}</p>
       <p>E-mail: ${manager.getEmail()}</p>
       <p>Office Number ${manager.getOfficeNumber()}</p>
       <p>Role: ${manager.getRole()}.</p>
      </div>
    </div>
  </div>`

};

const renderEngineer = (engineer) => {
  template += `<div class="col mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">"${engineer.getName()}</h5>
        <p class="card-text">ID:${engineer.getId()}</p>
        <p> E-mail: ${engineer.getEmail()}</p>
       <p> Office Number ${engineer.getGithub()}</p>
       <p>Role: ${engineer.getRole()}.</p>
      </div>
    </div>
  </div>`

};

const renderIntern = (intern) => {
  template += `<div class="col mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">"${intern.getName()}</h5>
        <p class="card-text">ID:${intern.getId()}</p>
        <p>  E-mail: ${intern.getEmail()}</p>
        <p>   School Name: ${intern.getSchoolName()}</p><p>
        <p>   Role: ${intern.getRole()}.</p>
      </div>
    </div>
  </div>`

};

// render full markdown 
const renderFullMarkdown = () => {
  let fullHTML = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stysheet" href="style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" 
       integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" 
       crossorigin="anonymous">
       <title>Team Profile </title>
   </head>
   <body>
       <header class="card text-white bg-dark mb-3 text-center" style="height: fit-content;">
           <h1>TEAM PROFILE </h1>
       </header>
   <section>
       ${template}
        
   </section>
       
   </body>
   </html>`
  return fullHTML
};

// replace templates function takes in the template, placeholder and value

const replaceTemplates = (template, placeholder, value) => {
  const pattern = new RegExp(`{{${placeholder}}}`, "gm");
  return template.replace(pattern, value);
};

module.exports = generateHTML;