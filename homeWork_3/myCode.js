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
findMin(12,14,4,-4,0.2);*/

// Task 6

/*function findUnique(arr) {
    for (i = 0; i < arr.length; i++) {
        for (let k = (i + 1); k < arr.length; k++) {
            if (arr[k] === arr[i]) {
                return false;
            }     
        }
    }
    return true;
}

console.log(findUnique([1,3,3,4,4]));*/

// Task 7

/*function lastElem(arr,count) {
    return (count == null) ? arr.pop() : arr.slice(-count);
}


console.log( lastElem([3,4,10,-5]));
console.log(lastElem([3,4,10,-5], 2 ));
console.log(lastElem([3,4,10,-5], 8));*/

// Task 8
function firstLetter(str) {
    const arr1 = str.split(' ');
    return arr1;
}



console.log(firstLetter("i love java script"));





   
