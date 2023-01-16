const n1 = 1_530.50;
// 1.530,50

// pega pelo sistema operacional
// const resultado = n1.toLocaleString();

const resultado = n1.toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'name' });
console.log(resultado);