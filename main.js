import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what are you want to add in your todos?"
        },
        {
            nane: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true",
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
