const Employee = require("./Employee");

   class Manager extends Employee {

    // ✕ Can set school via constructor
    constructor(position,name, id, email, officeNumber)  {
      super(position,name, id, email)
      this.officeNumber = officeNumber;
    }
    // ✕ getRole() should return "Intern" (1ms)
    getRole() {
     return "Manager"
    };
   // ✕ Can get school via getSchool()
   getOfficeNumber(officeNumber) {
       return this.officeNumber;
   };
   }

   module.exports = Manager;