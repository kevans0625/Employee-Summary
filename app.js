const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

//Gather information on the user...what role are they
var team = [];

function formTeam() {
    function promptUser() {
        // prompt the questions to gather information about how many people are on the teams, each employee
        // their email, id, and specific role based on
        //  their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
        // 
        // * Name

        //     * Role

        //     * ID

        //     * Role - specific property

        return inquirer.prompt([
            {
                type: "list",
                message: "Welcome. Please select your role on this team.",
                name: "type",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                    "Other employees"]
            }]).then(function (res) {
                //based on their response switch between functions to grab the proper employee function
                console.log(res);
                switch (res.type) {

                    case "Engineer":
                        return promptEngineer(res);

                    case "Intern":
                        return promptIntern(res)

                    case "Manager":
                        return promptManager(res)

                    default:
                        return promptEmployee(res);
                }
            })

    };
    promptUser()
    // add new role
    function promptMember() {
        // prompt the new role to continue on with team
        return inquirer.prompt([
            {
                type: "list",
                message: "Please select the next role on this team.",
                name: "type",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                    "Other employees"
                ]
            }]).then(function (newres) {
                //based on their response switch between functions to grab the proper employee function
                console.log(newres);
                switch (newres.type) {

                    case "Engineer":
                        return promptEngineer(newres);

                    case "Intern":
                        return promptIntern(newres)

                    case "Manager":
                        return promptManager(newres)

                    default:
                        return promptMember(newres);
                }
            })

    };
    // get Manager info
    function promptManager() {
        // prompt manager 
        // * Name

        //     * Role

        //     * ID

        //     * Role - specific property

        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the manager's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the manager's id.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the manager's office number.",
                name: "office",
            },
            {
                type: "list",
                message: "Would you like to add another teammate",
                name: "teammate",
                choices: [
                    "Yes",
                    "No",
                ]

            },
        ]).then(manager => {
            console.log(manager);

            var managers = new Manager(manager.name, manager.id, manager.email, manager.office);

            team.push(managers);
            //based on their response switch between grabbing another employees info and generating the html. 
            switch (manager.teammate) {

                case "Yes":
                    return promptMember(manager.type);

                default:
                    return generateHTML();
            }
        })
        

    }
    // get Engineer info
    function promptEngineer() {
        // * Name

        //     * Role

        //     * ID

        //     * Role - specific property

        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the engineer's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the engineer's id.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the engineer's Github usersname.",
                name: "github",
            },
            {
                type: "list",
                message: "Would you like to add another teammate",
                name: "teammate",
                choices: [
                    "Yes",
                    "No",
                ]

            },
        ]).then(engineer => {
            console.log(engineer);

            var engineers = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);

            team.push(engineers);
            //based on their response switch between grabbing another employees info and generating the html. 
            switch (engineer.teammate) {

                case "Yes":
                    return promptMember(engineer.type);

                default:
                    return generateHTML();
            }
        })

    };
    // get intern info
    function promptIntern() {
        // * Name

        //     * Role

        //     * ID

        //     * Role - specific property

        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the intern's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the intern's id.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the intern's school affiliation.",
                name: "school",
            },
            {
                type: "list",
                message: "Would you like to add another teammate",
                name: "teammate",
                choices: [
                    "Yes",
                    "No",
                ]

            },
        ]).then(intern => {
            console.log(intern);

            var interns = new Intern(intern.name, intern.id, intern.email, intern.github);

            team.push(interns);
            //based on their response switch between grabbing another employees info and generating the html. 
            switch (intern.teammate) {

                case "Yes":
                    return promptMember();

                default:
                    return generateHTML();
            }
        })
    };

  function generateHTML(){
    console.log(team);
  };
}
formTeam()
console.log(team);

