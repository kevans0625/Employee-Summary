const inquirer = require("inquirer");

class engineer {
    // Can set GitHUb account via constructor (1ms)
    constructor(name, id, email,github)  {
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


// responsible for creating a 
//   ✕ Can get GitHub username via getGithub()

// test("Can set GitHUb account via constructor", () => {
//     const testValue = "GitHubUser";
//     const e = new Engineer("Foo", 1, "test@test.com", testValue);
//     expect(e.github).toBe(testValue);
//   });
  
//   test("getRole() should return \"Engineer\"", () => {
//     const testValue = "Engineer";
//     const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
//     expect(e.getRole()).toBe(testValue);
//   });
  
//   test("Can get GitHub username via getGithub()", () => {
//     const testValue = "GitHubUser";
//     const e = new Engineer("Foo", 1, "test@test.com", testValue);
//     expect(e.getGithub()).toBe(testValue);
//   });

module.exports = engineer;