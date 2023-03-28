

class AreaofCicle{

    public Radius: number=0;
    public PI: number;

    public constructor(r:number){
        this.Radius=r;
        this.PI=3.14;
    }

    calculateAreaofCircle():number{
        return this.Radius*this.Radius*this.PI;
    }

}

var Result : number=0;

var obj11= new AreaofCicle(5);
var obj12 = new AreaofCicle(7);

Result= obj11.calculateAreaofCircle();
console.log("Area of Circle of First Object :"+Result);

Result= obj12.calculateAreaofCircle();
console.log("Area of Circle of Second Object :"+Result);