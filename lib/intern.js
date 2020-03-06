const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern  extends Employee {


    // ✕ Can set school via constructor
    constructor(name, id, email, school)  {
        super(name, id, email);
        this.school = school;
    }
    // ✕ getRole() should return "Intern" (1ms)
    getRole() {
        return 'Intern';
    };
   // ✕ Can get school via getSchool()
    getSchool(school) {
       return this.school;
   };
   }


module.exports = Intern;