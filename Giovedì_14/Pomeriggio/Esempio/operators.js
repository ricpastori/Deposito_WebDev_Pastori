let a = 10;
let b = 5;

// OPERATORI ARITMETICI
let sum = a + b; // Somma: 10 + 5 = 15
let difference = a - b; // Sottrazione: 10 - 5 = 5
let mutiplication = a * b; // Moltiplicazione: 10 * 5 = 50
let division = a / b; // Divisione: 10 / 5 = 2

// OPERATORI DI CONFRONTO: restituiscono sempre un Boolean (true o false)
let equal = a == "10"; // true: == confronta i valori e prova a convertirli allo stesso tipo
let strictlyEqual = a === "10"; // false: === confronta sia il valore sia il tipo (Number diverso da String)
let greater = a > b; // true: controlla se a e maggiore di b

// OPERATORI LOGICI
let condition = a > 5 && b < 10; // true: && è vero solo se entrambe le condizioni sono vere
let alternative = a < 5 || b < 10; // true: || è vero se almeno una condizione e vera
let negation = !(a > b); // false: ! inverte il risultato della condizione

// OPERATORI DI ASSEGNAZIONE
let x = 10;
x += 5; // Forma abbreviata di x = x + 5, quindi x diventa 15

console.log(sum, equal, strictlyEqual, condition);
