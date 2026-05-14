let value = 10; // Number
value = "ciao"; // Ora e una String (JS e dinamicamente tipizzato, quindi il tipo di una variabile puo cambiare durante l'esecuzione)
value = true; // Ora e un Boolean

let x; // x e undefined perche e stata dichiarata ma non le e stato assegnato un valore
let y = null; // y e null, che rappresenta "nessun valore"

let id = Symbol("id"); // Symbol, tipo primitivo unico e immutabile, usato come identificatore univoco

let bigIntValue = 1234567890123456789n; // BigInt, tipo primitivo per numeri interi molto grandi

const pi = 3.14; // Number (a virgola mobile)
pi = 3.14159; // Riassegnazione non consentita perché la variabile è dichiarata con const

const numbers = [1, 2, 3];
numbers.push(4); // Consentito perche const impedisce di riassegnare la variabile, ma non di modificare l'array

let global = "Visibile ovunque"; // Variabile dichiarata fuori da un blocco: puo essere letta anche dentro il blocco if

if (true) {
	let local = "Visibile solo nel blocco"; // Variabile locale al blocco: esiste solo tra queste parentesi graffe
	console.log(global); // Ok: la variabile global e accessibile anche qui
	console.log(local); // Ok: siamo ancora dentro il blocco in cui local e stata dichiarata
}

console.log(local); // Errore: local non esiste fuori dal blocco if
