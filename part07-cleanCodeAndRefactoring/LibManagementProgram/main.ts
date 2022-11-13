import {DocManager} from "./DocManager";
import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {Newspaper} from "./Newspaper";

const docManager = new DocManager([]);
docManager.add(new Book(11, "KHKT", 1000, "NTN", 200));
docManager.add(new Magazine(21, "Codegym", 100, 12, new Date()));
docManager.add(new Newspaper(31, "TX", 50, new Date()));

docManager.showAll();

docManager.remove(11);
docManager.showAll();
