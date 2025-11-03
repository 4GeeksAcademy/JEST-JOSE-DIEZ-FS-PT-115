const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('1 euro debe ser 1.07 dólares', () => {
    const dollars = fromEuroToDollar(1);
    expect(dollars).toBeCloseTo(1.07);
});

test('1 dólar debe ser aproximadamente 146.26 yenes', () => {
    const yenes = fromDollarToYen(1);
    expect(yenes).toBeCloseTo(146.26); // (156.5 / 1.07)
});

test('1 yen debe ser aproximadamente 0.00557 libras', () => {
    const pounds = fromYenToPound(1);
    expect(pounds).toBeCloseTo(0.00557); // (0.87 / 156.5)
});