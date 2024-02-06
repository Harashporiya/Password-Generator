const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');

const number = document.getElementById('number');
const symbol = document.getElementById('symbols');

const btn = document.getElementById('btn');
const charInput = document.getElementById('charInput');

const length = document.getElementById('length');
const strong = document.getElementById('strong');


const upperLetter = "ASDFGHJKLMNBVCXZQWERTYUIOP";
const lowerLetter = "asdfghjklmnbvcxzqwertyuiop";

const numberEl = "1234567890";

const symbolEl = "!@#$%^&*()~,.:{}[]\-+/<>";


const strongpassword = "ASDFGHJKLMNBVCXZQWERTYUIOPasdfghjklmnbvcxzqwertyuiop1234567890!@#$%^&*()~,.:{}[]\-+/<>";

const getRandomUpper = () => {
     return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}
const getRandomLower = () =>{
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}
const getRandomNumber = () =>{
   return  numberEl[Math.floor(Math.random() * numberEl.length)];
}
const getRandomSymbol = () =>{ 
   return symbolEl[Math.floor(Math.random() * symbolEl.length)];
}
const getRandomStrongpassword = () =>{ 
   return strongpassword[Math.floor(Math.random() * strongpassword.length)];
}

btn.addEventListener('click', function () {
    let password = '';
    let passwordLength = parseInt(length.value) || 10;

    if (passwordLength < 4 || passwordLength > 20) {
        alert("Error: Password length limit for between 4 and 20");
        return;
    }

    const chars = [];

    if (uppercase.checked) {
        chars.push(getRandomUpper);
    }

    if (lowercase.checked) {
        chars.push(getRandomLower);
    }

    if (number.checked) {
        chars.push(getRandomNumber);
    }

    if (symbol.checked) {
        chars.push(getRandomSymbol);
    }

    if (strong.checked) {
        chars.push(getRandomStrongpassword);
    }

    if (chars.length === 0) {
        alert('Please select at least one option.');
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomFuncIndex = Math.floor(Math.random() * chars.length);
        const randomFunc = chars[randomFuncIndex];
        password += randomFunc();
    }

    charInput.value = password;
});
