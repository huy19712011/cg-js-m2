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
        3. Remove document
        4. Find document by title
        5. Show all documents
        6. Show all documents by type
        0. Exit
    `;
    console.log(mainMenu);
}

function showAddMenu() {
    const addMenu = `
        ---------------------Add document---------------------
        1. Add book
        2. Add magazine
        3. Add newspaper
        0. Exit
    `;
    console.log(addMenu);
}

function showEditMenu() {
    const addMenu = `
        ---------------------Edit document---------------------
        1. Edit book
        2. Edit magazine
        3. Edit newspaper
        0. Exit
    `;
    console.log(addMenu);
}

function showDocByType() {
    const addMenu = `
        ---------------------Choose document---------------------
        1. All Books
        2. All Magazines
        3. All Newspapers
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
                case 0:
                    console.log("Exit...");
                    exit = true;
                    break;
            }

            break;
        case 2:
            showEditMenu();
            const editChoice = +readlineSync.question("Please choose type of document: ");
            switch (editChoice) {
                case 1:
                    // edit Book
                    const bookId = +readlineSync.question("Please choose book id: ");
                    const book = docManager.findById(bookId)[0];
                    const newBook = Book.emptyInstance().input();
                    newBook.setId(bookId);
                    docManager.update(bookId, newBook);
                    docManager.showAll();
                    break;
                case 2:
                    // edit Magazine
                    const magazineId = +readlineSync.question("Please choose magazine id: ");
                    const newMagazine = Magazine.emptyInstance().input();
                    docManager.update(magazineId, newMagazine);
                    docManager.showAll();
                    break;
                case 3:
                    // edit Newspaper
                    const newNewspaperId = +readlineSync.question("Please choose newspaper id: ");
                    const newNewspaper = Newspaper.emptyInstance().input();
                    docManager.update(newNewspaperId, newNewspaper);
                    docManager.showAll();
                    break;
                case 0:
                    console.log("Exit...");
                    exit = true;
                    break;
            }

            break;
        case 3:
            // remove document
            const idToRemove = +readlineSync.question("Please choose document id to remove: ");
            docManager.remove(idToRemove);
            docManager.showAll();
            break;
        case 4:
            const title = readlineSync.question("Input title: ");
            const list = docManager.findByTitle(title);
            // list.forEach(item => item.showInfo());
            list.forEach(item => console.log(item));
            break;
        case 44:
            const id = +readlineSync.question("Input ID: ");
            const listId = docManager.findById(id);
            console.log("findById");
            console.log(listId);
            listId.forEach(item => item.showInfo());
            break;
        case 5:
            console.log("ok");
            docManager.showAll();
            break;
        case 6:
            // show Documents by type
            showDocByType();
            const type = +readlineSync.question("Please choose type of Document: ");
            switch (type) {
                case 1:
                    docManager.showBooks();
                    break;
                case 2:
                    docManager.showMagazines();
                    break;
                case 3:
                    docManager.showNewspapers();
                    break;
            }
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
