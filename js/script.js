{
    const welcome = () => {
        console.log("Witam wszystkich developerów");
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const selectElement = document.querySelector(".js-form__field");
        const index = selectElement.value;
        const radioElement1 = document.querySelector(".js-radio-1");
        const inputElement = document.querySelector(".js-input");
        const calculationElement = document.querySelector(".js-calculation");
        const summary = inputElement.value;
        const currencyName = document.querySelector(".js-currencyName");
       

        switch (radioElement1.checked) {
            case true:
                currencyName.innerText = index;
                switch (index) {
                    case "USD":
                        return calculationElement.innerText = (summary * 4.84).toFixed(2);
                          
                    case "EUR":
                        return calculationElement.innerText = (summary * 4.78).toFixed(2);

                    case "CHF":
                        return calculationElement.innerText = (summary * 4.84).toFixed(2);

                    case "GBP":
                        return calculationElement.innerText = (summary * 5.47).toFixed(2);
                }
                break;

            case false:
                currencyName.innerText = "PLN";
                switch (index) {
                    case "USD":
                        return calculationElement.innerText = (summary * 4.75).toFixed(2);

                    case "EUR":
                        return calculationElement.innerText = (summary * 4.63).toFixed(2);

                    case "CHF":
                        return calculationElement.innerText = (summary * 4.77).toFixed(2);

                    case "GBP":
                        return calculationElement.innerText = (summary * 5.35).toFixed(2);
                };
                break;
        };
        
    };
    
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };
    
    init();
}


