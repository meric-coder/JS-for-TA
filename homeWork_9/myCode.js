// Task 1
/*
function checkCharacter (myString) {
   let regExp = /^[A-Z]/;
   if (regExp.test(myString)) {
      console.log("String with Upper Case");
   } else 
   {
      console.log("String with lower case");
   }
}

checkCharacter("Hello");
checkCharacter("qwerty");
*/

// Task 2
/*
function checkEmail (myEmail) {
const regExp = /\w+@\w+\.\w+/;

if (regExp.test(myEmail)) {
   console.log("True");
} else {
   console.log("False");
}

}

checkEmail("Qmail2@gmail.com");
*/

// Task 3
/*
const myArr = /d(b+)(d)/i;

function checkArray(myString) {
   return myArr.test(myString);
}
console.log(checkArray("cdbBdsbz"));
*/

// Task 4
/*
const regExp = /(\w+)\s(\w+)/;
const myStr = "Java Script";
const newStr = myStr.replace(regExp, "$2  $1");
console.log(newStr);*/

// Task 5
/*
function checkCard (myString) {
const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
if (regExp.test(myString)) {
   console.log("Validation successful");
}else {
   console.log("Please, try again. Incorrect date input");
}

}

checkCard("2543-6557-4355-7865");
//checkCard("2543d-6557-4355-7865");
//checkCard("2543-6557-4355-78657");
*/

// Task 6
/*
 function checkEmail(myString) {
   const regExp = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
   if (regExp.test(myString)) {
      console.log("Email is correct");
   }else {
      console.log("Email is incorrect");
   }
 }

 checkEmail("my_ma-i1@gma_i1.c_m");

 */

 // Task 7
/*
 function checkLogin(myStr) {
   const regExp = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
   const reqNumber = /[0-9\.]+/g;
   const resultNumber = myStr.test(reqNumber);
   const myResult = regExp.test(myStr);
   console.log(myStr + "is" + myResult + "-" + resultNumber); 

 }

 checkLogin("e1.88ret3");
 //checkLogin("ee1*ret3");
 //checkLogin("1.1e1ret3");
 //checkLogin("sse1r55555et3");

 */


 function getPromise(message, delay) {
    
 }

 getPromise("test promise", 2000).then(function(data){
   console.log(data);
 });
