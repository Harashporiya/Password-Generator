const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const number = document.getElementById('number')
const symbol = document.getElementById('symbols')
const btn = document.getElementById('btn')
const charInput = document.getElementById('charInput')
const length = document.getElementById('length')
const strong = document.getElementById('strong')
const upperLetter = "ASDFGHJKLMNBVCXZQWERTYUIOP";
const lowerLetter = "asdfghjklmnbvcxzqwertyuiop";
const numberEl = "1234567890";
const symbolEl = "!@#$%^&*()~,.:{}[]\-+/<>";
const strongpassword = "ASDFGHJKLMNBVCXZQWERTYUIOPasdfghjklmnbvcxzqwertyuiop1234567890!@#$%^&*()~,.:{}[]\-+/<>";

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomsymbol,
// };


let uppercaseEnabled = false;

uppercase.addEventListener('click', function () {
    uppercaseEnabled = uppercase.checked;
});

btn.addEventListener('click', function () {
    if (uppercaseEnabled) {
        let a = upperLetter[Math.floor(Math.random() * upperLetter.length)];
        console.log(a);
        document.getElementById('charInput').value = a;
    }
});

let lowercaseEnabled = false;
lowercase.addEventListener('click', function () {
    lowercaseEnabled = lowercase.checked;
})
btn.addEventListener('click', function () {
    if (lowercaseEnabled) {
        let b = lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
        console.log(b)
        document.getElementById('charInput').value = b
    }

})


let numberEnabled = false;

number.addEventListener('click', function () {
    numberEnabled = number.checked;
})
btn.addEventListener('click', function () {
    if (numberEnabled) {
        let num = numberEl[Math.floor(Math.random() * numberEl.length)]
        document.getElementById('charInput').value = num
        console.log(num)
    }
})


let symbolsEnabled = false;
symbol.addEventListener('click', function () {
    symbolsEnabled = symbol.checked;
});

btn.addEventListener('click', function () {
    if (symbolsEnabled) {
        const symbols = '!@#$%^&*(){}[]=<>/,.';
        let h = symbols[Math.floor(Math.random() * symbols.length)];
        console.log(h);
        document.getElementById('charInput').value = h;
    }

});
let strongpass = false;
strong.addEventListener('click', function () {
    strongpass = strong.checked;
});

btn.addEventListener('click', function () {
    if (strongpass) {
        let h1 = strongpassword[Math.floor(Math.random() * strongpassword.length)];
        console.log(h);
        document.getElementById('charInput').value = h1;
    }

});


const getRandomUpper = () => {
    return upperLetter[Math.floor(Math.random() * upperLetter.length)];
};
const getRandomLower = () => {
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
};
const getRandomNumber = () => {
    return numberEl[Math.floor(Math.random() * numberEl.length)]
};
const getRandomSymbol = () => {
   
    return symbolEl[Math.floor(Math.random() * symbolEl.length)]
};
const getRandomStrongpassword = () => {
    return strongpassword[Math.floor(Math.random() * strongpassword.length)];
}

btn.addEventListener('click', function () {
    let password = '';
    let passwordLength = parseInt(length.value) || 10;

    if (passwordLength < 4 || passwordLength > 20) {
        alert("Error: Password length limit for between 4 and 20");
      
    }
  
        passwordLength = Math.max(passwordLength, 4);
        passwordLength = Math.min(passwordLength, 20);
    


    const chars = [];

    if (uppercase.checked) {
        chars.push(getRandomUpper)
    }
    else if (lowercase.checked) {
        chars.push(getRandomLower)
    }
    else if (number.checked) {
        chars.push(getRandomNumber)
    }
    else if (symbol.checked) {
        chars.push(getRandomSymbol)
    }
    else if (strong.checked) {
        chars.push(getRandomStrongpassword)
    }

    else if (chars.length === 0) {
        charInput.value = alert('Please select at least one option.')
        return
    }
   

    for (let i = 0; i < passwordLength; i++) {
        const randomFuncIndex = Math.floor(Math.random() * chars.length)
        const randomFunc = chars[randomFuncIndex]
        password += randomFunc()
    }

    charInput.value = password
})
