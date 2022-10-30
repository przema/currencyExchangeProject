let radioElement1 = document.querySelector(".js-radio-1");
let radioElement2 = document.querySelector(".js-radio-2");
let inputElement = document.querySelector(".js-input");
let formElement = document.querySelector(".js-form");
let calculationElement = document.querySelector(".js-calculation");
let currencyName = document.querySelector(".js-currencyName");
let selectElement = document.querySelector(".js-form__field");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let index = selectElement.value;
    let summary = inputElement.value;

    if (radioElement1.checked) {
        if (index == 1) {
            calculationElement.innerText = (summary * 4.84).toFixed(2);
            currencyName.innerText = "USD";
        } else if (index == 2) {
            calculationElement.innerText = (summary * 4.78).toFixed(2);
            currencyName.innerText = "EUR";
        } else if (index == 3) {
            calculationElement.innerText = (summary * 4.84).toFixed(2);
            currencyName.innerText = "CHF";
        } else {
            calculationElement.innerText = (summary * 5.47).toFixed(2);
            currencyName.innerText = "GBP";
        }
    } else {
        if (index == 1) {
            calculationElement.innerText = (summary * 4.75).toFixed(2);
            currencyName.innerText = "PLN";
        } else if (index == 2) {
            calculationElement.innerText = (summary * 4.63).toFixed(2);
            currencyName.innerText = "PLN";
        } else if (index == 3) {
            calculationElement.innerText = (summary * 4.77).toFixed(2);
            currencyName.innerText = "PLN";
        } else {
            calculationElement.innerText = (summary * 5.35).toFixed(2);
            currencyName.innerText = "PLN";
        }
    }
})



