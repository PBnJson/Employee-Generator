const Manager = require("../lib/manager");
var mock = new Manager(
    "Joshua",
    "777",
    "asdf@asdf.com",
    "214-518-3948",
    "Manager"
);

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
    it("returns employee office number", () => {
        var employeeOfficeNumber = mock.getOfficeNumber();
        expect(employeeOfficeNumber).toBe("214-518-3948");
    });
    it("returns Manager role", () => {
        var employeeRole = mock.getRole();
        expect(employeeRole).toBe("Manager");
    });
});