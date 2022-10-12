// Task 1

/*let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount(mentor) {
    return Object.entries(mentor).length;
}

console.log(propsCount(mentor));*/

// Task 2

/*let newObj = {
    name: "Lincoln",
    surname: "Abraham",
    age: 75,
    sex: "Male",
    nationality: "USA"
}

function showProps(obj) {

    console.log(Object.keys(newObj));
    console.log(Object.values(obj));
}

showProps(newObj);*/

// Task 3

/*class Person {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(name,surname) {
        return this.name + " " + this.surname;
    }

}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    
}
  
showFullName(middleName) {
    return this.name + " " + middleName + " " + this.surname;
}

 showCourse() {
    return new Date().getFullYear() - this.year;
  }

}
  const stud1 = new Student("Max", "Petrovych", 2015);
  console.log(stud1.showFullName("Olegovych"));
  console.log("Current course: " + stud1.showCourse());
  */


  // Task 4

  class Worker {
    _experience = 2;
  constructor(fullName, dayRate, workingDays)  {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
     
  }
    showSalary() {
        return this.dayRate * this.workingDays;
    }

   showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this._experience;
   }
  }

let rab = new Worker("Oleg Bohdanovych", 2, 100);
console.log(rab.showSalaryWithExperience());


