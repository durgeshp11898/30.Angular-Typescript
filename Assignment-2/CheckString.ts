
function CheckString(inputString:String,toFind:string) :  boolean{
   
    let result= inputString.includes(toFind);
    console.log(typeof result);
    if(result==true){
        return true;
    }else
    return false;;
}


var inputString: String="Pube Kothrud Marvellous Infosystems";
var result: boolean;
result=CheckString(inputString,"Marvellous");

if(result==true){
    console.log("String Contains Marvellous in it");
}else console.log("String dose not Contains Input Parameter");
