const Manager = require('../library/Manager');

describe('Manager', () => {
  const mockManager = {
    name: "Inaia",
    id: 30,
    email: "inaia5martin@gmail.com",
    officeNumber:105,
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an manager class", () => {
      const manager = new Manager(mockManager);
      expect(manager).toBeInstanceOf(Manager);
    });
    test("should construct a new instance of manager class with name,id,email and office number", () => {
        const manager = new Manager(mockManager);
        expect(manager).toEqual({
        name: "Inaia",
        id: 30,
        email: "inaia5martin@gmail.com",
        officeNumber:105,
        role:"Manager"

      });
    });
  });
describe("method tests",()=> {
  test("should return id when the getId method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getId()).toEqual(30);
  });

  test ("should return name when the getName method is called",()=>{
    const manager = new Manager(mockManager);
        expect(manager.getName()).toEqual("Inaia");
  });
  test ("should return email when the getEmail method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getEmail()).toEqual("inaia5martin@gmail.com");
});
test ("should return office number when the getOfficeNumber method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getOfficeNumber()).toEqual(105);
});
test ("should return engineer role when the getHole method is called",()=>{
    const manager = new Manager(mockManager);
    expect(manager.getRole()).toEqual("Manager");
});
});
});