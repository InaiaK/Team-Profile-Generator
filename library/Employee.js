class Employee {
    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }
    // get user inputs 
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}
// exporting employee to be accessed. 
module.exports = Employee;