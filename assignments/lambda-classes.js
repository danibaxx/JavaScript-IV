// CODE here for your Lambda Classes

// Person Class
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
};

// Instructor connects to Person
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    // console.log(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

const siri = new Instructor({
  name: 'Sirius Black ',
  age: 45,
  location: 'The Shadows',
  gender: 'M',
  specialty: 'Transfiguration',
  favLanguage: 'JavaScript',
  catchPhrase: `Keep on coding!!`
});

const luna = new Instructor({
  name: 'Luna Lovegood',
  age: 22,
  location: 'Hogwarts',
  gender: 'F',
  specialty: 'Mystical Creatures',
  favLanguage: 'JavaScript',
  catchPhrase: `Look on the brightside of coding!!`
});

// Student connects to Person
class Student extends Person {
  constructor(attr) {
    super(attr);
    // console.log(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(`${this.name} favorite subject is ${this.favSubjects[i]}.`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

const subject = 'JavaScript Fundamentals';

const bella = new Student({
  name: 'Bellatrix Lestrange',
  age: 35,
  location: 'Azkaban',
  gender: 'F',
  previousBackground: 'witch',
  favSubjects: ['CSS', 'HTML', 'Python'],
  className: `WebPT6`
});

const harry = new Student({
  name: 'Harry Potter',
  age: 25,
  location: 'Under the stairs',
  gender: 'M',
  previousBackground: 'Potions',
  favSubjects: ['Python', 'SQL', 'Ruby'], 
  className: `WebPT6`
});

// PM connects to Instructor
class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInsructor = attr.favInsructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
};

const severus = new ProjectManager({
  name: 'Severus Snape',
  age: 148,
  location: 'Hogwarts',
  gender: 'M',
  gradClassName: 'Hogwarts Class 1889',
  favInsructor: 'He who shall not be named'
});

const ginny = new ProjectManager({
  name: 'Ginny Weasley',
  age: 18,
  location: 'Hogwarts',
  gender: 'F',
  gradClassName: 'Hogwarts Class 2010',
  favInsructor: 'Professor Mcgonagall'
});

console.log(siri.speak());
console.log(siri.grade(bella, 'Fundamentals'));
console.log(luna.speak());
console.log(luna.demo('Functions'));


console.log(harry.speak());
console.log(bella.listsSubjects());
console.log(harry.PRAssignment('React'));
console.log(bella.sprintChallenge('JavaScript Fundamentals'));

console.log(severus.speak());
console.log(severus.debugsCode(harry, 'JavaScript'));
console.log(ginny.speak());
console.log(ginny.standUp('#webPT6'));
console.log(ginny.demo('Python'));
console.log(severus.grade(bella));
