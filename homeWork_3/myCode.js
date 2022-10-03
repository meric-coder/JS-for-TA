// Task 1

/*let arr = [2,3,4,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);*/

// Task 1 (While)

/*let arr = [2,3,4,5];
let i = 0;
let sum = 0;
while ( arr[i]) {
    sum += arr[i];
    i++;
}
console.log(sum);*/

// Task 2

/*let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i] + " is even");
    } else if (arr[i] % 2 !== 0) {
        console.log(arr[i] + " is odd");
    }
}*/


// Task 3 (a)

/*function randArray(k){
    let arr = [];
    for (i = 0; i < k; i++) {
    arr.push(Math.round(Math.random()*1000/2));
}
return arr;
}

console.log(randArray(5));*/

// Task 3 (b)

/*function randomArray(k) {
    return Array.apply(null, Array(k)).map(function() {
        return Math.round(Math.random() *1000/2);
    });
}
console.log(randomArray(5));*/

// Task 4

/*function raiseToDegree(a,b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Please enter digits");
    } else {
        return a**b;
        }
}
let a = prompt("Please enter digit - a");
let b = prompt("Please enter digit - b");

console.log(raiseToDegree(Number(a),Number(b)));*/

// Task 5
 /*function findMin(){
    let min = 0;
    for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) {
        min = arguments[i];
        console.log(min);
    } 
 };
 }
findMin(12,14,4,-4,0.2);




   
