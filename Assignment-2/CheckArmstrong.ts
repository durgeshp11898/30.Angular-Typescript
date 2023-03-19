
function checkArmstrong(No1:number) :  boolean{
    let temp :number=No1;
    let sum=0;
    let flag:boolean=false;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = (temp / 10);
    }

    if(sum==No1){
        flag=true;
        return flag;
    }else return flag;
}


var inputNumber: number=153;
var result: boolean;
result=checkArmstrong(inputNumber);

if(result==true){
    console.log("Given Number is ArmStrong Number");
}else console.log("Given Number is Not Armstrong");
