let readlineSync = require('readline-sync');

export function showMenu() {
    const mainMenu = `
        ---------------------Menu---------------------
        1. Add document
        2. Edit document
        3. Delete document
        4. Find document by title
        5. Show all document
        6. Show all documents by type
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
