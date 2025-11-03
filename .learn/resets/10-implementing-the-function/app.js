let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// --- Funciones de conversión ---
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
};

const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };