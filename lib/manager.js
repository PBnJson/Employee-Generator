const Employee = require("./employee");

//super passes the name, id, and email from the emplyee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
            return this.officeNumber;
        }
        // this will supercede the employee role.
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;