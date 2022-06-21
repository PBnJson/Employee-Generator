const Intern = require("../lib/intern");
var mock = new Intern("Joshua", "777", "asdf@asdf.com", "SMU", "Intern");

describe("Intern information", () => {
    it("returns employee name", () => {
        var employeeName = mock.getName();
        expect(employeeName).toBe("Joshua");
    });
    it("returns employee id number", () => {
        var employeeId = mock.getId();
        expect(employeeId).toBe("777");
    });
    it("returns employee email address", () => {
        var employeeEmail = mock.getEmail();
        expect(employeeEmail).toBe("asdf@asdf.com");
    });
    it("returns employee school", () => {
        var employeeSchool = mock.getSchool();
        expect(employeeSchool).toBe("SMU");
    });
    it("returns Intern role", () => {
        var employeeRole = mock.getRole();
        expect(employeeRole).toBe("Intern");
    });
});
// Something really strange happens with i change the 'Employee' to 'CEO', the test fails unless it is the name 'Employee'
// I figured it out.  In the model file, 'employee.js' the getRole is returning 'Employee'