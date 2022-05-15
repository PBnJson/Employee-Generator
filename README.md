# Employee Team Generator

The user is prompted using npm inquirer. Based on the answers a Manager, Engineer, and/or Intern profile is created and an index.html file is written. The index.html file is stored in the /dist folder. The program is modular, however, it could be made much more modular. Tests were created and ran to ensure functionality.

## JS files

Seperate files were created with an Employee class, Engineer class, Intern class, and Manager class. All the classes super the Employee class and then something is added. The Engineer a github username is added, the Intern a school, and the Manager an office number.

The index.js has the inquirer functions/questions/answers, the HTML generator function, and the for loop which loops through each of the getRole functions and adds the divs to the managerHtml variable. The managerHtml, internHtml, and engineerHtml is then joined to the htmlBody variable. They all come together with fs writeFileSync and an index.html file is written and placed in the dist folder.

## Styling

Styling was done using Bootstrap.

## Testing

Testing was done
