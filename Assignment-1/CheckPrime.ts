
function checkPrime(no : number){

    let res: boolean = false;

    if(no<=1){
        console.log("The given is number is not Prime")
        return  false;
    }

    for(let i=2;i<no/2;i++){
        if(no%i==0){
            res=true;
            break;
        }
    }
    return res;
}

var no: number=11;

var res: boolean =false;

res=checkPrime(no);

if(res==true){
    console.log("The Given Number "+no+" is Prime");
}else{
    console.log("The Given Number "+no+" is Not Prime");
}

