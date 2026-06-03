// Importo il file funzioni.js
const funzioni = require("./math");

// Salvo il risultato
const numeroMassimo = funzioni.massimo(10, 20);

console.log("Numero massimo:");

console.log(numeroMassimo);

// Controllo se il numero è pari
const controlloPari = funzioni.pari(8);

console.log("Numero pari?");

console.log(controlloPari);
