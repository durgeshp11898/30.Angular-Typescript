function CheckString(inputString, toFind) {
    var result = inputString.includes(toFind);
    console.log(typeof result);
    if (result == true) {
        return true;
    }
    else
        return false;
    ;
}
var inputString = "Pube Kothrud Marvellous Infosystems";
var result;
result = CheckString(inputString, "Marvellous");
if (result == true) {
    console.log("String Contains Marvellous in it");
}
else
    console.log("String dose not Contains Input Parameter");
