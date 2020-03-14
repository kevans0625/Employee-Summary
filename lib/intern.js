const Employee = require("./Employee");

class Intern  extends Employee {


    // ✕ Can set school via constructor
    constructor(position,name, id, email, school)  {
        super(position,name, id, email);
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