const Engineer = require("../lib/engineer");
var mock = new Engineer("Joshua", "1234", "Engineer", "github");

describe("Engineer information", () => {
    it("returns employee name", () => {
        var employeeName = mock.getName();
        expect(employeeName).toEqual("Joshua");
    });
    it("returns employee ID number", () => {
        var employeeId = mock.getId();
        expect(employeeId).toEqual("1234");
    });
    it("returns employee role as Engineer", () => {
        var testEngineer = mock.getRole();
        expect(testEngineer).toEqual("Engineer");
    });
    it("returns employee github", () => {
        var employeeGithub = mock.getGithub();
        expect(employeeGithub).toEqual("github");
    });
});