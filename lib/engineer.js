const Employee = require("./Employee");

class Engineer  extends Employee {
    // Can set GitHUb account via constructor (1ms)
    constructor(name, id, email, github)  {
        super(name, id, email);
        this.github = github;
 }
 //   ✕ getRole() should return "Engineer" (1ms)
 
 getRole() {
     return 'Engineer';
 };

 getGithub(github) {
    return this.github;
};
}

module.exports = Engineer;