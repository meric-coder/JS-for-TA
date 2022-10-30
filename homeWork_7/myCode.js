
//Task 1

/*let myWindow = window.open("https://www.w3schools.com/jsref/met_win_settimeout.asp" , "Hello World" , "width = 300, height = 300");

setTimeout(function(){
    myWindow.resizeTo(500,500);
} , 2000);

setTimeout(function(){
    myWindow.moveTo(200,200);
} , 4000);

setTimeout(function(){
    myWindow.close();
} , 6000);*/

// Task 2

/*
   function myFunction () {
    let myElement = document.getElementById("text");

    myElement.style.color = "orange";
    myElement.style.fontSize = "20pt";
    myElement.style.fontFamily = "Comic Sans MS";
    
   }*/

   // Task 3

   /*function setBackground(color) {

    document.body.style.background = color;
   }*/


   // Task 4
/*
   myBtn.addEventListener("click",deleteColor);

   function deleteColor() {
    let myList = document.getElementById("dropValues");
    myList.remove(myList.selectedIndex);
   }
   
   deleteColor();
*/

// Task 5
/*
         myBtn.addEventListener("mouseover",addMouseOver);
         myBtn.addEventListener("click",addEventClick);
         myBtn.addEventListener("mouseout",mouseOut);
         function addMouseOver() {
              
          let myElement =  document.getElementById("myBtn").innerHTML;
          console.log("Mouse Over");
         }
         function addEventClick() {
            let myElement = document.getElementById("myBtn").innerHTML;
            console.log("I was clicked");
         }
         function mouseOut() {
          let myElement = document.getElementById("myBtn").innerHTML;
          console.log("Mouse is not on me");

         }*/

         // Task  6

         /* function windowSize() {
            let width = window.innerWidth;
            let height = window.innerHeight;
            let size = "Width: " + w + ", " + "Height: " + height;
          }

          window.addEventListener("resize", windowSize);*/

          // Task 7   
/*
const cityArr = {
   "ger" : ["Berlin", "Dortmund", "Frankfurt", "Bayern"],
   "usa" : ["New-York", "Washington", "Boston", "Chikago"],
   "ukr" : ["Lviv", "Odesa", "Rivne", "Kharkiv"]
}

let selec = document.getElementById("country");
selec.addEventListener("change",createList);
selec.addEventListener("change", toParagraph);

let citySelec = document.getElementById("cities");
citySelec.addEventListener("change", toParagraph);

function createList() {
   citySelec.innerHTML = "";
   let selectedCountry = selec.value;
   for (let i = 0; i < cityArr[selectedCountry].length; i+=1) {
      let newOption = document.createElement("option");
      newOption.innerHTML = cityArr[selectedCountry][i];
      citySelec.appendChild(newOption);
}
}

let parag = document.querySelector("p");
function toParagraph() {
    parag.innerHTML = "";
    parag.innerHTML = selec.options[selec.selectedIndex].text + ", "
    + citySelec.options[citySelec.selectedIndex].text;
}
*/

          
         



   



   
    


