
function shuffleAlpha(){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let alphaArray = alpha.split('');
    for (let i = 0; i < alpha.length; i++){
        const switchPosition = Math.floor(Math.random()*(i+1));
        const temp = alphaArray[i];
        alphaArray[i] = alphaArray[switchPosition];
        alphaArray[switchPosition] = temp;
    }
    return alphaArray;
}
const shuffledAlpha = shuffleAlpha();
console.log(shuffledAlpha);



function atBashCipher (message, shift,alpha){
    let encrypted = '';
    let msgArr = message.split('');
    for (let i = 0; i < message.length; i++){
        let index = alpha.indexOf(msgArr[i]);
        encrypted += alpha[(index+shift)%26];
    }
    return encrypted;
}

let message1 = "hello";
console.log(atBashCipher(message1, 1, shuffledAlpha));