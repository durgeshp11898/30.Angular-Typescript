var Arithmatic = /** @class */ (function () {
    function Arithmatic(no1, no2) {
        this.inputvalue1 = 0;
        this.inputvalue2 = 0;
        this.inputvalue1 = no1;
        this.inputvalue2 = no2;
    }
    Arithmatic.prototype.addittion = function () {
        return this.inputvalue1 + this.inputvalue2;
    };
    Arithmatic.prototype.substrction = function () {
        return this.inputvalue1 - this.inputvalue2;
    };
    Arithmatic.prototype.multiplication = function () {
        return this.inputvalue1 * this.inputvalue2;
    };
    Arithmatic.prototype.Devision = function () {
        return this.inputvalue1 / this.inputvalue2;
    };
    return Arithmatic;
}());
var result = 0;
var obj1 = new Arithmatic(22, 11);
result = obj1.addittion();
console.log("Addittion Function Called --> : " + result);
result = obj1.substrction();
console.log("substrction Function Called --> : " + result);
result = obj1.multiplication();
console.log("mulltiplication Function Called --> : " + result);
result = obj1.Devision();
console.log("Devision Function Called --> : " + result);
var obj2 = new Arithmatic(50, 25);
result = obj2.addittion();
console.log("Addittion Function Called --> : " + result);
result = obj2.substrction();
console.log("substrction Function Called --> : " + result);
result = obj2.multiplication();
console.log("mulltiplication Function Called --> : " + result);
result = obj2.Devision();
console.log("Devision Function Called --> : " + result);
