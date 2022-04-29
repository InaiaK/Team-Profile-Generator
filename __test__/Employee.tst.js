const { TestWatcher } = require('jest');
const Employee = require('../library/Employee');

describe('Employee', () => {
  const mockEmployee = {
    name: "Inaia",
    id: 30,
    email: "inaia5martin@gmail.com",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an employee class", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toBeInstanceOf(Employee);
    });
    test("should construct a new instance of an employee class with name,ide,email", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toEqual({
        name: "Inaia",
        id: 30,
        email: "inaia5martin@gmail.com",
      });
    });
  });
describe("method tests",()=> {
  test("should return id when the getId method is called",()=>{
    const employee=new Employee(mockEmployee);
    expect(employee.getId()).toEqual(30);
  });

  test ("should return name when the getName method is called",()=>{
    const employee=new Employee(mockEmployee);
    expect(employee.getName()).toEqual("Inaia");
  });
  test ("should return email when the getEmail method is called",()=>{
    const employee=new Employee(mockEmployee);
    expect(employee.getEmail()).toEqual("inaia5martin@gmail.com");
});
});
});
