//input a string
//loop through the entire word and select the individual letter
//if the letter matches with the replacer than replace the letter
//return the new string
//output obfuscated string

var password = process.argv[2];
var newPassword;

// for(var i = password.length - 1; i < password.length; i++){
//     var res = password.charAt('e')
//     console.log(res)
// }
var newPassword = password.split('')
var a = newPassword.map((letter) =>{
    if(letter === 'a'){
        return '4'
    } else if(letter === 'e'){
        return '3'
    } else if(letter === 'o'){
        return '0'
    } else if(letter === 'l'){
        return '1'
    } else{
        
        return letter
    }
}).join('')
console.log(a)




// if(password[i].includes('a')){
//     newPassword += '4';
// } else if(password[i].includes('e')){
//     newPassword += '3';
// } else if(password[i].includes('o')){
//     newPassword += '0';
// } else if(password[i].includes('l')){
//     newPassword += '1';