const Intern = require('../library/Intern');

describe('Intern', () => {
  const mockIntern = {
    name: "Inaia",
    id: 30,
    email: "inaia5martin@gmail.com",
   school:"University of Denver"
  };
  describe("constructor tests", () => {
    test("should construct a new instance of intern class", () => {
      const intern= new Intern(mockIntern);
      expect(intern).toBeInstanceOf(Intern);
    });
    test("should construct a new instance of intern class with name,id,email and office number", () => {
      const intern = new Intern(mockIntern);
      expect(intern).toEqual({
        name: "Inaia",
        id: 30,
        email: "inaia5martin@gmail.com",
        school:"University of Denver",
        role:"Intern"

      });
    });
  });
describe("method tests",()=> {
  test("should return id when the getId method is called",()=>{
    const intern=new Intern(mockIntern);
    expect(intern.getId()).toEqual(30);
  });

  test ("should return name when the getName method is called",()=>{
    const intern=new Intern(mockIntern);
    expect(intern.getName()).toEqual("Inaia");
  });
  test ("should return email when the getEmail method is called",()=>{
    const intern=new Intern(mockIntern);
    expect(intern.getEmail()).toEqual("inaia5martin@gmail.com");
});
test ("should return school when the getSchool method is called",()=>{
    const intern=new Intern(mockIntern);
    expect(intern.getSchool()).toEqual("University of Denver");
});
test ("should return intern role when the getHole method is called",()=>{
    const intern=new Intern(mockIntern);
    expect(intern.getRole()).toEqual("Intern");
});
});
});