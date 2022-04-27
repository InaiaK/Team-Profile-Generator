const Employee = require('./Employee')


class Intern extends Employee {
    constructor(name, id, email, schoolname) {
        super(name, id, email)
        this.schoolname = schoolname
        this.role="Intern"
    }
    getSchoolName() {
        return this.schoolname

    }
    getRole() {
        return "Intern" // or return this.role
    }
}

module.exports = Intern