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

class CircleX extends AreaofCicle{
constructor(radius : number){
    super(radius);

}

public CalculateCircumfrnce(): number{
    let Ans: number=0;
    Ans= 2*this.PI*this.Radius*this.Radius;
    return Ans;
}
}


var Ret:number=0;
var Obj1=  new CircleX(5);

Ret=Obj1.calculateAreaofCircle();
console.log("Area Of Circle is "+Ret);

Ret=Obj1.CalculateCircumfrnce();
console.log("Area Of CalculateCircumfrnce is "+Ret);