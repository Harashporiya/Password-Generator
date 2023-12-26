const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const number = document.getElementById('number')
const symbol = document.getElementById('symbols')
const btn = document.getElementById('btn')
const charInput = document.getElementById('charInput')
const length = document.getElementById('length')

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
        let a = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
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
        let b = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
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
        let num = Math.floor(Math.random() * 360)
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


const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65)
const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48)
const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
};

btn.addEventListener('click', function () {
    let password = '';
    let passwordLength = parseInt(length.value) || 10
    passwordLength = Math.max(passwordLength, 4)
    passwordLength = Math.min(passwordLength, 20)
    const selectedChars = [];

    if (uppercase.checked) selectedChars.push(getRandomUpper)
    if (lowercase.checked) selectedChars.push(getRandomLower)
    if (number.checked) selectedChars.push(getRandomNumber)
    if (symbol.checked) selectedChars.push(getRandomSymbol)

    if (selectedChars.length === 0) {
        charInput.value = alert('Please select at least one option.')
        return
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomFuncIndex = Math.floor(Math.random() * selectedChars.length)
        const randomFunc = selectedChars[randomFuncIndex]
        password += randomFunc()
    }

    charInput.value = password
})
