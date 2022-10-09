// Task 1
try {
function calcRectangleArea(width , height) {
    if (isNaN(width) || isNaN(height) || width < 0 || height < 0 ) {
    throw new Error("String entered or negative value");
    } else if  (width * height <=0) {
        throw new Error("Width or Height is not entered");
    } else  {
        console.log(width * height);;
    }

}

let a = prompt("Enter value a");
let b = prompt("Enter value b");

calcRectangleArea(a,b);

} catch (exception) {
    console.log(exception.stack);
}


// Task 2
try {
function checkAge(userAge) {
    if (isNaN(userAge)){
        alert("String is entered.Please enter a number");
        throw new Error("String entered.Please enter a number");
    } else if (userAge == null) {
        alert("The field is empty.Please enter your age");
        throw new Error("The field is empty.Please enter your age");
    } else if (userAge < 14) {
     alert("User's age < 14 years");
     throw new Error("User's age < 14 years");
    } else {
        alert("You can watch the movie at https://megogo.net/ua");
    }

}

let enterAge = prompt("Enter age");

checkAge(Number(enterAge));
}
catch  (exception) {
    console.log(exception.stack);
}

// Task 3

class MonthException {
    constructor(message) {
        this.message = message;
        this.month = "MonthException";
    }
}

function showMonthName(month) {
     month = month - 1;
    let months = ["JAN", "FEB","MAR", "APR", "MAY", "JUN","JUL", "AUG","SEP", "OCT", "NOV", "DEC"];
    if (months[month] !==undefined) {
        return months[month];
    }else {
        throw new MonthException(month + " is not a valid month");
    }
}

try {
    let myMonth = prompt("Please enter a valid month");
    let monthName = showMonthName(myMonth);
    console.log(monthName);
} catch (e) {
    console.log(e.message);
}

// Task 4

function showUser(id) {
    if (id < 0) {
        throw new Error (id + " is a negative value");
    }
    return {id };
}

function showUsers(ids) {
    let result = [];
    ids.forEach(function (id) {
        try {
            let person = showUser(id);
            result.push(person);
        } catch (e) {
            console.log(e.message);
        }
    });
}
    showUsers ([7, -12, 44, 22]);
    
