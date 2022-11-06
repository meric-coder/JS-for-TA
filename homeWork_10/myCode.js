// Task 1
/*
const myArr  = ["Tom", "Sam", "Ray", "Bob"];
const [x,y, ,...z] = myArr;
console.log(x);
console.log(y);
console.log(z);
*/
// Task 2
/*
const data = {
   names:  ["Tom", "Sam", "Ray", "Bob"],
   ages: [20,24,22,26]
};

const {names: [name1, name2, name3, name4], ages: [age1,age2,age3,age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);
*/

// Task 3
/*
function mul(...rest) {
let result = 1;
let isNumber;
for( let i of rest) {
   if(typeof i == 'number') {
   result *= i;
   isNumber = true;
}
   
}
return isNumber ? result : 0;
}

console.log(mul(1,"str",2,3,true));
console.log(mul(null,"str",false,true));
*/

// Task 4
/*
let server = {
   data: 0,
   convertToString: function(callback) {
      callback(() => {return this.data + ""});
   }
};
let client = {
   server: server,
   result: "",
   calc: function(data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function() {
      return (callback => {
         this.result = callback()});
   }
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);

*/

// Task 5
/*
 const keys = [1,2,3,4];
 const values = ["div","span","b","i"];

 function mapBuilder(keys, values) {
   const map = new Map();
   for (let i of keys) {
      map.set(i, values[i-1])
   }
   return map;
 }

 const map = mapBuilder(keys, values);
 console.log(map.size);
 console.log(map.get(2));

 */
