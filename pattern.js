// let col;
// let n=5;
// for(row=0; row<=n; row++){
//     let row='*';
//     for(col=0; col<=row; col++){
//      row +="*";
//     }
//     console.log(row);
//  for(row=0; row<7; row++){
//     for(col=1; col<row; col++){
//         console.log("+");

//     }
//     console.log("+" + "</br>")
//  }

// }
// let n = 5;
// for (let i = 7; i >= n; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '* ';
//     }
//     console.log(row);
// }
let n = 5; 
let string = "";
for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - i; k++) {
        string += "*";
    } string += "\n";
}
console.log(string);