let numberInput = document.getElementById('number-input');
let checkNumber = document.getElementById('check-number');
let randomGenerator = document.getElementById('random__generator');
let numbersBox = document.getElementById('numbers__box');
let number = document.getElementById('number');
let paragraph = document.getElementById('paragraph');
let url = 'http://numbersapi.com/';
let finalUrl;

function checkNumberApi(num) {
    finalUrl = url + num;
    fetch(finalUrl)
        .then(res => res.text())
        .then(data => {
            numbersBox.style.display = 'flex';
            numbersBox.innerHTML = `
                <h2 class="number" id="number">${num}</h2>
                <p class="paragraph" id="paragraph">${data}</p>
            `
        })
}

function showBtn() {
    let num = numberInput.value
    if (num) {
        if (num >= 0 && num <= 300) {
            checkNumberApi(num)
            numberInput.value = ''
        } else {
            numbersBox.style.display = 'flex';
            numberInput.value = ''
            numbersBox.innerHTML = `
                <p class="paragraph error">
                    Please enter a number between 0 to 300
                </p>
            `;
        }
    } else {
        numbersBox.style.display = 'flex';
        numbersBox.innerHTML = `
                <p class="paragraph error">
                    The input field cannot be empty
                </p>
            `;
    }
}

function checkRandomApi() {
    let random = Math.round(Math.random() * 300);
    checkNumberApi(random);
    numbersBox.style.display = 'flex';
    return random
}

randomGenerator.addEventListener('click', checkRandomApi);

checkNumber.addEventListener('click', showBtn)