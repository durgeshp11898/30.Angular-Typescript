var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(radius) {
        return _super.call(this, radius) || this;
    }
    CircleX.prototype.CalculateCircumfrnce = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return CircleX;
}(AreaofCicle));
var Ret = 0;
var Obj1 = new CircleX(5);
Ret = Obj1.calculateAreaofCircle();
console.log("Area Of Circle is " + Ret);
Ret = Obj1.CalculateCircumfrnce();
console.log("Area Of CalculateCircumfrnce is " + Ret);
