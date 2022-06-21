# Employee Team Generator

The user is prompted using npm inquirer. Based on the answers a Manager, Engineer, and/or Intern profile is created and an index.html file is written. The index.html file is stored in the /dist folder. The program is modular, however, it could be made much more modular. Tests were created and ran to ensure functionality.

**Generated HTML files are in the dist folder.**

## JS files

Seperate files were created with an Employee class, Engineer class, Intern class, and Manager class. All the classes super the Employee class and then something is added. The Engineer a github username is added, the Intern a school, and the Manager an office number.

The index.js has the inquirer functions/questions/answers, the HTML generator function, and the for loop which loops through each of the getRole functions and adds the divs to the managerHtml variable. The managerHtml, internHtml, and engineerHtml is then joined to the htmlBody variable. They all come together with fs writeFileSync and an index.html file is written and placed in the dist folder.

## Styling

Styling was done using Bootstrap and a little custom CSS.

## Testing

Testing was done for all employee role functions as well as the employee function. All passed. I wasn't very good at testing in the beginning of this assignment, but i feel much more comfortable with it now.

## Install Instruction

This site was built using [NPM Inquirer](https://www.npmjs.com/package/inquirer).

```
npm install inquierer
```

###### Additional Info

[Manager icons created by DinosoftLabs - Flaticon](https://www.flaticon.com/free-icons/manager)
