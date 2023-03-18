
function DisplayFacor(inputNumber : number){
 let itr: number=0;
for(itr=0;itr<=inputNumber;++itr){

        if(inputNumber%itr==0){
        console.log(itr);
        }
    }

}

var inputNumber : number=20;

console.log("The Factor of "+inputNumber+" IS :");

DisplayFacor(inputNumber);



