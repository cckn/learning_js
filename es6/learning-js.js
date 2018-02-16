// Learning JavaScript
// chapter 21 : Object property settings and proxies

// proxies

const coefficients = {
    a: 1,
    // b: 2,
    c: 5,
};

const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        return target[key] || 0;
    },
});

function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
}

console.log(evaluate(2, betterCoefficients));
