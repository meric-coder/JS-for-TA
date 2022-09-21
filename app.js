
let D = 0;
const car = {

    name: 5,
    year: 10,
    country: 15,
    speed: 20

};
const cars = [car.name, car.year , car.country , car.speed];

function display() {

    for( let i = 0 ; i < 4 ; i++)
    
    {
D = cars[i] + "<br>";
document.write(D);
    };
    
};

display();