class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
function GetPeople() {
  let people = [
    new Person("Joan ", "of Ark ", 17),
    new Person("James", "Cook ", 27),
    new Person("Ludwig", "van Beethoven ", 66),
    new Person("Charles ", "Darwin  ", 24),
    new Person("Albert ", "Einstein  ", 107),
    new Person("Mahatma ", "Gandhi  ", 29),
  ];
  return people;
}
module.exports = {
  GetPeople,
};
