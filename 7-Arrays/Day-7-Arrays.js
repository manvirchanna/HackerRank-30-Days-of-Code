'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    var n = parseInt(readLine());
    var arr = readLine().split(' ');
    var arrr = arr.map(Number);
    var result = "";
    
    for (var i = n - 1; i > -1; i--)
        {
            result = result + arrr[i] + " ";
        }
    console.log(result);

}
