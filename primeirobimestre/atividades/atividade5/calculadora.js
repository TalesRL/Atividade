const prompt = require('prompt-sync')();

console.log('Calculadora de Gorjeta');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
const valorConta = Number(prompt('Digite o valor da conta:'));
const percentualGorjeta = Number(prompt('Digite o percentual da gorjeta:'));
const valorGorjeta =  valorConta * (percentualGorjeta/100);

const valorTotal = valorConta + valorGorjeta;

console.log('O valor final da conta é '+ valorTotal);
console.log('O valor da conta ' + valorConta);
console.log('O percentual da gorjeta '+ percentualGorjeta);
console.log('O valor da gorjeta é '+ valorGorjeta);


