
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const placeholder = require("json-placeholder-replacer");

// The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Gather information on the user...what role are they
var team = [];

function formTeam() {
    function promptUser() {
        // prompt the questions to gather information about how many people are on the teams, each employee
        return inquirer.prompt([
            { type: "list",
                message: "Welcome. Please select your role on this team.",
                name: "type",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ]
            }
        ])
            .then(function (res) {
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
                        return promptMember(res);
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
            }])
            .then(function (newres) {
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
    // get Manager info  // their email, id, and specific role based on
    //  their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
    // 
    // * Name

    //     * Role

    //     * ID

    //     * Role - specific property

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
                message: "Please enter the manager's email.",
                name: "email",
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
            var managers = new Manager("manager", manager.name, manager.id, manager.email, manager.office);
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
                message: "Please enter the engineer's email.",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter the engineer's Github usersname.",
                name: "github",
            },
            {
                type: "list",
                message: "Would you like to add another teammate?",
                name: "teammate",
                choices: [
                    "Yes",
                    "No",
                ]

            },
        ]).then(engineer => {
            console.log(engineer);

            var engineers = new Engineer("engineer", engineer.name, engineer.id, engineer.email, engineer.github);

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
                message: "Please enter the intern's email.",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter the intern's affiliated school.",
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

            var interns = new Intern("intern", intern.name, intern.id, intern.email, intern.school);

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
}


function init() {
    //             console.log(team);

    for (let i = 0; i < team.length; i++) {
        switch (team[i].position) {
            case "manager":
                //createCard(team[i].postition, team[i].name, team[i].id, team[i].email, "Office Number: " + team[i].officeNumber,);
                let managerFile = fs.readFileSync(path.join(__dirname, "./templates/manager.html"), "utf8")

                fs.appendFile('./templates/main.html', managerFile, function (err) {
                    if (err) throw err;
                    console.log('Manager(s) added!');
                })

            case "Engineer":
                // createCard(team[i].postition, team[i].name, team[i].id, team[i].email, "Github: " + team[i].github);
                let engineerFile = fs.readFileSync(path.join(__dirname, "./templates/engineer.html"), "utf8")

                fs.appendFile('./templates/main.html', engineerFile, function (err) {
                    if (err) throw err;
                    console.log('Engineer(s) added!');
                })
            case "Intern":
                // createCard(team[i].postition, team[i].name, team[i].id, team[i].email, "School: " + team[i].school);
                let internFile = fs.readFileSync(path.join(__dirname, "./templates/intern.html"), "utf8")

                fs.appendFile('./templates/main.html', internFile, function (err) {
                    if (err) throw err;
                    console.log('Intern(s) added!');
                })

        }

    }
}


function generateHTML() {
    console.log(team);
    console.log(team[0].email);
    let mainFile = fs.readFileSync(path.join(__dirname, "./templates/main.html"), "utf8")

    fs.writeFile("./outputs/index.html", mainFile, function (err) {
        if (err) throw err;
        console.log("Home page created!");
        init()

    // var mainFile = readFileAsync("./templates/main.html")
    // writeFileAsync("./outputs/index.html", mainFile, function (err) {
    //     if (err)
    //         throw err;
    // })
    // console.log("Home page created!");

    })
   
}
formTeam()
console.log(team[0]);

console.log(team);

