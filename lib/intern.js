const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;

// const phil = new Intern('phil', 1234, 'u@asdf.com', 'SMU')  phil.getSchool() phil.school