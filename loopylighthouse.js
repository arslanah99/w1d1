


// //Create a loop to give numbers froms 100 - 200
// for(var i = 100; i <= 200; i++){
// //add first if divide if it is a whole number divisible by 3
//     if(i % 3 === 0){
//         console.log('Loopy')
//         console.log('Lighthouse')
//     } else if(i % 4 === 0) {
//         console.log('LoopyLighthouse')
//         //divide numbers by 4 and do loopylighthouse
//     }
//     //else print all numbers
//     else{
//         console.log(i)
//     }
// }
//MY ATTEMPT: above

for (var num = 100; num <= 200; num++) {
    var output = "";
  
    if (num % 3 === 0) {
      output += "Loopy";
    }
    if (num % 4 === 0) {
      output += "Lighthouse";
    }
    console.log(output === "" ? num : output);
  }