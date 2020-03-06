const inquirer = require("inquirer");

//Gather information on the user...what role are they

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
            name: "username",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "Other employees"
            ]

        
        }   //based on their response switch between functions to grab the proper employee type
    ])
       console.log(response);
        };
        promptUser()


