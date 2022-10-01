// Task 1 (res1)
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

//Task 1 (res2)
let x =1;
let y = 2;

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

// Task (res3)
let x = 1;
let y = 2;

let res3 = Boolean(y - x);
console.log(res3);
console.log(typeof res3);

//Task (res4)
let x = 1;
let y = 2;

let res4 = (Boolean(x) + String(y))*y;
console.log(res4);
console.log(typeof res4);

// Task 2 (a)

let age = prompt("Enter digit");
let number  = (age >= 0 && age % 2 == 0) ? "Positive and even" : "Negative or odd";
console.log(number);
// Task 2 (b)

let age = prompt("Enter digit");
let divider = 7;
let res = (age > 0 && age % divider == 0) ? "Yes" : "No";
console.log(res);

//Task 3
const arr = [];
arr[0] = 1;
arr[1] = "Hello";
arr[2] = Boolean(arr[0]);
arr[3] = null;

alert(arr.length);

let entered = prompt("Please enter any digit");
arr.push(entered);
console.log(arr[4]);

arr.splice(0,1);
console.log(arr);

// Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
let myString = console.log(cities[0] + '*' + cities[1] + "*" + cities[2]);

//Task 5
let isAdult = prompt("How old are you?");
const age = 18;
let isAdultString = String(isAdult);
let answer = (age >18) ? "You are adult" : " You are not adult";
console.log(answer);
 
// Task 5 (If else)

if (isAdult >= age) {
      console.log("You are adult");
} else if (isAdult < age && isAdult > 0) {
      console.log("You are not adult");
}else if (isAdult == isAdultString || isAdult < 0 )
{
      console.log("You entered a String or negative value");
}

//Task 6 Calculate triangle square

let a = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter c"); 
try {
if (a > 0 && b > 0 && c > 0 )
{
let p = 1/2*(a+b+c);
let triangleSquare = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(Number(triangleSquare).toFixed(3));
}
else if  (a <= 0 || b <=0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c))
{
 throw new Error("Please enter valid values");
}
} 
catch  (exception){
      console.log(exception.stack);
      
}

// Task 6 (Right-angeled or not right-angeled triangle)

 if  (a ** 2 == b ** 2 + c ** 2 || b** 2 == a ** 2 + c ** 2 || c **2 == b ** 2  + a ** 2) {
      console.log(" Right-angeled triangle");
     }
     else   {
     console.log(" Not right angeled triangle");
     }


      // Task 7 (If else)
      let date = new Date();
      let timeNow = date.getHours();
      
      if (timeNow >= 23 && timeNow <5) {
            alert("Good night");
      } else if ( timeNow >=5 && timeNow <11) {
            alert("Good morning");
      } else if ( timeNow >=11 && timeNow <17) {
            alert("Good afternoon");
      }else (timeNow >=17 && timeNow <23); {
            alert("Good evening");
      }

      // Task 7 (Switch)

      let date = new Date();
      let timeNow = date.getHours();

      switch (true) {
      case ( timeNow >= 23 && timeNow < 5):
            alert("Good night");
            break;
      case ( timeNow >=5 && timeNow <11):
            alert("Good morning");
            break;
      case ( timeNow >=11 && timeNow <17):
            alert("Good afternoon");
            break;
      case ( timeNow >=17 && timeNow <23):
            alert("Good evening");
            break;
      }