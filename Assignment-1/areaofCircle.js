function calculateAreaOfCircle(radius, PI) {
    var areaofCircle = PI * radius * radius;
    return areaofCircle;
}
var radius = 5;
var PI = 3.14;
var areaofCircle = 0;
areaofCircle = calculateAreaOfCircle(radius, PI);
console.log("Area of Circle is  " + areaofCircle);
