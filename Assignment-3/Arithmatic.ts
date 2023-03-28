
class Arithmatic{

    public  inputvalue1 : number=0;
    public inputvalue2 : number=0;
    
    public constructor( no1 : number,no2:number){
        this.inputvalue1=no1;
        this.inputvalue2=no2;
    }

    public addittion(){
        return this.inputvalue1+this.inputvalue2;
    }

    public substrction(){
        return this.inputvalue1-this.inputvalue2;
    }

    public multiplication(){
        return this.inputvalue1*this.inputvalue2;
    }

    public Devision(){
        return this.inputvalue1/this.inputvalue2;
    }

}

var result : number=0;
var obj1= new Arithmatic(22,11);


result=obj1.addittion();
console.log("Addittion Function Called --> : "+result);

result=obj1.substrction();
console.log("substrction Function Called --> : "+result);

result=obj1.multiplication();
console.log("mulltiplication Function Called --> : "+result);

result=obj1.Devision();
console.log("Devision Function Called --> : "+result);


var obj2= new Arithmatic(50,25);


result=obj2.addittion();
console.log("Addittion Function Called --> : "+result);

result=obj2.substrction();
console.log("substrction Function Called --> : "+result);

result=obj2.multiplication();
console.log("mulltiplication Function Called --> : "+result);

result=obj2.Devision();
console.log("Devision Function Called --> : "+result);


