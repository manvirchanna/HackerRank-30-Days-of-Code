function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');
    
    var n = parseFloat(inputArray[0]);
    var tipperc = parseFloat(inputArray[1]);
    var taxperc = parseFloat(inputArray[2]);
    var tip = n*tipperc/100;
    var tax = n*taxperc/100;
    var MealCost = Math.round(n+tip+tax);
    
    console.log(MealCost);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
