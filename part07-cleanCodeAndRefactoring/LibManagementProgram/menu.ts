let readlineSync = require('readline-sync');

function showMenu() {
    const mainMenu = `
        ---------------------Menu---------------------
        1. Add employee
        2. Edit employee
        3. Delete employee
        4. Sort employees by name
        5. Show all employees
        6. Sort employees
        0. Exit
    `;
    console.log(mainMenu);
}

showMenu();

let exit: boolean = false;
while (true) {
    const choose = + readlineSync.question("Please choose: ");
    switch (choose) {
        case 1:

            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 0:
            console.log("Exit...");
            exit = true;
            break;
    }
    if (exit) {
        break;
    }
    showMenu();
}
