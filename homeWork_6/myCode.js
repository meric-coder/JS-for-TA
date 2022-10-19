// Task 1 

let myElement = document.getElementById("test");
console.log(myElement.innerHTML = "Last");*/
// Second approcach
let myElement = document.querySelector("#test");
console.log(myElement.innerHTML = "Last");


//Task 2

let changeImage = document.body.innerHTML = 'src="cat.jpg"'
alert(changeImage.outerHTML);

// Task 3

let showList = document.getElementById("text");
console.log("Selector text 0: " + showList.getElementsByTagName("p")['0'].textContent);
console.log("Selector text 1: " + showList.getElementsByTagName("p")['1'].textContent);
console.log("Selector text 2: " + showList.getElementsByTagName("p")['2'].textContent);


// Task 4

const myList = document.getElementById("list");
console.log(myList.firstElementChild.textContent);
console.log(myList.lastElementChild.textContent);
console.log(myList.firstElementChild.nextElementSibling.textContent);
console.log(myList.lastElementChild.previousElementSibling.textContent);
console.log(myList.lastElementChild.previousElementSibling.previousElementSibling.textContent);


//Task 5

document.getElementById("myDiv").previousElementSibling.style.color = "lightgreen";

 document.getElementById("myDiv").getElementsByTagName("p")['0'].style.fontWeight = "900";

 document.getElementById("myDiv").getElementsByTagName("p")['1'].style.color = "red";

 document.getElementById("myDiv").getElementsByTagName("p")['2'].style.textDecoration = "underline";

 document.getElementById("myDiv").getElementsByTagName("p")['3'].style.fontStyle = "italic";

 document.getElementById("myList").style.listStyle = "none";

 document.getElementById("myList").style.display = "flex";

 document.getElementsByTagName("span")["0"].style.display = "none";

 // Task 6

let myInput_1 = prompt("Please enter 1 input");
let myInput_2 = prompt("Please enter 2 input");

let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");

inp1.value = myInput_1;
inp2.value = myInput_2;

// Replace 
inp1.value = myInput_2;
inp2.value = myInput_1;


 // Task 7

 document.body.innerHTML =
  `<body> 
 <main class="mainClass check item"> 	 
       <div id="myDiv"> 
          <p>First paragraph</p>            
        </div> 
      </main>  
   </body> `
 
 
 
 

 

 

 



