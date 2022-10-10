// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrency = document.querySelector(".from");
let toCurrency = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// Event when currency is changed
fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}

// display results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML =
        ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}

// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};