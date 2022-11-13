// showMenu();
// while (true) {
//
//     cin >> choose;
//     switch (choose) {
//         case 1:
//             cout << "Add employee" << '\n';
//             mng.addEmployee();
//             break;
//         case 2:
//             cout << "Edit employee" << '\n';
//             break;
//         case 3:
//             cout << "Remove employee" << '\n';
//             cout << "Enter name: ";
//             cin.ignore(100, '\n');
//             getline(cin, name);
//             mng.removeEmployee(name);
//             break;
//         case 4:
//             cout << "Sort employees by name" << '\n';
//             break;
//         case 5:
//             cout << "Show all employees" << '\n';
//             mng.show();
//             break;
//         case 6:
//             cout << "Sort employees" << '\n';
//             mng.sortByName();
//             mng.show();
//             break;
//         case 0:
//             cout << "Exit" << '\n';
//             exit = true;
//             break;
//     }
//     if (exit) {
//         break;
//     }
//     showMenu();
// }
//
//
// }
//
// void showMenu() {
//     cout << "---------------------Menu---------------------" << '\n';
//     cout << "1. Add employee" << '\n';
//     cout << "2. Edit employee" << '\n';
//     cout << "3. Delete employee" << '\n';
//     cout << "4. Sort Employee by name" << '\n';
//     cout << "5. Show all employees" << '\n';
//     cout << "6. Sort employees" << '\n';
//     cout << "0. Exit" << '\n';
//     cout << "----------------------------------------------" << '\n';
//     cout << "Please choose: " << '\n';
// }