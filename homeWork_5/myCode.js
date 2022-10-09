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

let newObj = {
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

showProps(newObj);