var AreaofCicle = /** @class */ (function () {
    function AreaofCicle(r) {
        this.Radius = 0;
        this.Radius = r;
        this.PI = 3.14;
    }
    AreaofCicle.prototype.calculateAreaofCircle = function () {
        return this.Radius * this.Radius * this.PI;
    };
    return AreaofCicle;
}());
var Result = 0;
var obj11 = new AreaofCicle(5);
var obj12 = new AreaofCicle(7);
Result = obj11.calculateAreaofCircle();
console.log("Area of Circle of First Object :" + Result);
Result = obj12.calculateAreaofCircle();
console.log("Area of Circle of Second Object :" + Result);
