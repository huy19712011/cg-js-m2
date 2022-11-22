import {DocManager} from "./DocManager";
import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {Newspaper} from "./Newspaper";

// import {showMenu} from "./menu";
const readlineSync = require("readline-sync");

function showMenu() {
    const mainMenu = `
        ---------------------Menu---------------------
        1. Add document
        2. Edit document
        3. Delete document
        4. Find document by title
        5. Show all documents
        6. Show all documents by type
        0. Exit
    `;
    console.log(mainMenu);
}

function showAddMenu() {
    const addMenu = `
        ---------------------Menu---------------------
        1. Add book
        2. Add magazine
        3. Add newspaper
        0. Exit
    `;
    console.log(addMenu);
}

const docManager = new DocManager([]);
docManager.add(new Book(11, "Book 1", "KHKT", 1000, "NTN", 200));
docManager.add(new Magazine(21, "Magazine 1", "Codegym", 100, 12, new Date()));
docManager.add(new Newspaper(31, "Newspaper 1", "TX", 50, new Date()));

showMenu();
let exit: boolean = false;
while (true) {
    const choose = +readlineSync.question("Please choose: ");
    switch (choose) {
        case 1:
            showAddMenu();
            const addChoice = +readlineSync.question("Please choose type of document: ");
            switch (addChoice) {
                case 1:
                    // add Book
                    const newBook = Book.emptyInstance().input();
                    docManager.add(newBook);
                    docManager.showAll();
                    break;
                case 2:
                    // add Magazine
                    const newMagazine = Magazine.emptyInstance().input();
                    docManager.add(newMagazine);
                    docManager.showAll();
                    break;
                case 3:
                    // add Newspaper
                    const newNewspaper = Newspaper.emptyInstance().input();
                    docManager.add(newNewspaper);
                    docManager.showAll();
                    break;
            }

            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            console.log("ok");
            docManager.showAll();
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

// docManager.showAll();
// docManager.remove(11);
// docManager.showAll();
