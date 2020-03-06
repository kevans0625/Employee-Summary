const inquirer = require("inquirer");


class Employee{

    //arguments to create an employee and then set name, id, email, and role. 
    constructor(name, id, email) {
        // "Can set name via constructor arguments"
        this.name = name;
        this.id = id;
        this.email = email;
        // this.role = role;
      }
    
    getName(){
        return this.name;
     };
    getId(id) {
        return this.id; 
    };
    getEmail(){
        return this.email;
     };
    getRole() {
        return 'Employee';
     };
    
}


module.exports = Employee;