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
   /*let workerList = [];

  class Worker {
    _experience = 1.2;
  constructor(fullName, dayRate, workingDays)  {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
     
  }
    showSalary() {
        return this.dayRate * this.workingDays;
    }

   showSalaryWithExperience() {
    console.log(this.dayRate * this.workingDays * this._experience);
   }
      get experience() {
        return this._experience;
      }
      set experience(value) {
        this._experience = value;
      }

  }

let workerOne = new Worker("Oleg Bohdanovych", 1, 5);
workerOne.showSalary();
workerOne.showSalaryWithExperience();
workerOne.experience = 1.5;
console.log("New experience: ");
workerOne.showSalaryWithExperience();

*/


//Task 5

class GeometricFigure {
 
   getArea() {
    return 0;
   }

   toString() {
    return Object.getPrototypeOf(this).constructor.name;
   }
}

class Triangle extends GeometricFigure {
    constructor(b, h) {
        super();
        this.b = b;
        this.h = h;
    }

    getArea() {
        return this.b * this.h / 2;
    }
}
class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.side = a;
    }

    getArea() {
        return this.side ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
       super ();
       this.radius = r;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

    function handleFigures(figures) {
       return figures.reduce(function(sum, figure) {
         if (figure instanceof GeometricFigure) {
            console.log("Geometric figure: " + figure.toString() - "area:" + figure.getArea);
        return sum + figure.getArea();
        }
        throw Error("Bad argument:");
       } , 0);

    }
    let figures = [new Triangle(4,5), new Square(7), new Circle(5)];
    console.log(handleFigures(figures));


