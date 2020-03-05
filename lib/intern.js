const inquirer = require("inquirer");

class Intern {

    // ✕ Can set school via constructor
    constructor(name, id, email, school)  {
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