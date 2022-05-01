const { TestWatcher } = require('jest');
const Manager = require('../library/Manager');

describe('Manager', () => {
  const mockManager = {
    name: "",
    id:0,
    email: "",
    officeNumber:0,
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an manager class", () => {
      const manager = new Manager(mockManager);
      expect(manager).toBeInstanceOf(Manager);
    });
    test("should construct a new instance of manager class with name,id,email and office number", () => {
        const manager = new Manager(mockManager);
        expect(manager).toEqual({
        getName: "",
        getId: 0,
        getEmail: " ",
        getOfficeNumber:0,
        getRole:"Manager"

      });
    });
  });
describe("method tests",()=> {
  test("should return id when the getId method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getId()).toEqual(0);
  });

  test ("should return name when the getName method is called",()=>{
    const manager = new Manager(mockManager);
        expect(manager.getName()).toEqual("");
  });
  test ("should return email when the getEmail method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getEmail()).toEqual("");
});
test ("should return office number when the getOfficeNumber method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getOfficeNumber()).toEqual(0);
});
test ("should return engineer role when the getHole method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getRole()).toEqual("Manager");
});
});
});