
function calculateAreaOfCircle(radius: number,PI: number){

let areaofCircle= PI*radius*radius;

    return areaofCircle;
}

var radius : number =5;
var PI : number=3.14;

var areaofCircle : number=0;

areaofCircle= calculateAreaOfCircle(radius,PI);

console.log("Area of Circle is  "+areaofCircle);