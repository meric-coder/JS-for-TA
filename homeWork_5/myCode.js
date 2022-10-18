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
   /*
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #getSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalary() {
        console.log(this.#getSalary());
    }

    showSalaryWithExperience() {
        console.log(this.getSalaryWithExperience());
    }
    get getExperience() {
        return this.#experience;
    }
    set setExperience(value) {
        this.#experience = value;
    }
    getSalaryWithExperience() {
        return this.#getSalary() * this.#experience;;
    }

};

let workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23)
];
for (let i = 0; i < workers.length; i++) {
    let worker = workers[i];
    console.log(worker.fullName);
    worker.showSalary();
    console.log("New experience: " + worker.getExperience);
    worker.showSalaryWithExperience();
    worker.setExperience = parseFloat((Math.random() * (worker.getExperience - 2) + 2).toFixed(1));
    console.log("New experience: " + worker.getExperience);
    worker.showSalaryWithExperience();
};

console.log("---");
let sortedWorkers = workers.sort((a, b) => a.getExperience - b.getExperience);
for (let i = 0; i < sortedWorkers.length; i++) {
    console.log(`worker_${sortedWorkers[i].fullName}: ${sortedWorkers[i].getSalaryWithExperience()} `);
};

*/


//Task 5

/*class GeometricFigure {
 
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

    */

    




