const Engineer = require('../library/Engineer');

describe('Engineer', () => {
  const mockEngineer = {
    name: "Inaia",
    id: 30,
    email: "inaia5martin@gmail.com",
    github:"https://github.com/InaiaK",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an engineer class", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer).toBeInstanceOf(Engineer);
    });
    test("should construct a new instance of an engineer class with name,id,email and githubprofile", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer).toEqual({
        name: "Inaia",
        id: 30,
        email: "inaia5martin@gmail.com",
        github:"https://github.com/InaiaK",
        role:"Engineer"

      });
    });
  });
describe("method tests",()=> {
  test("should return id when the getId method is called",()=>{
    const engineer=new Engineer(mockEngineer);
    expect(engineer.getId()).toEqual(30);
  });

  test ("should return name when the getName method is called",()=>{
    const engineer=new Engineer(mockEngineer);
    expect(engineer.getName()).toEqual("Inaia");
  });
  test ("should return email when the getEmail method is called",()=>{
    const engineer=new Engineer(mockEngineer);
    expect(engineer.getEmail()).toEqual("inaia5martin@gmail.com");
});
test ("should return github profile URL when the getGithub method is called",()=>{
    const engineer=new Engineer(mockEngineer);
    expect(engineer.getGithub()).toEqual("https://github.com/InaiaK");
});
test ("should return engineer role when the getHole method is called",()=>{
    const engineer=new Engineer(mockEngineer);
    expect(engineer.getRole()).toEqual("Engineer");
});
});
});