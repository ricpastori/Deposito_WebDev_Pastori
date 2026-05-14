// PRIMITIVI
const name = "Riccardo"; // String
let age = 30; // Number
// Number (a virgola mobile), ma in JS non c'e distinzione tra interi e decimali: sono tutti di tipo Number
const measure = 1.75;
let isActive = true; // Boolean
let undefinedVariable; // Undefined perche e dichiarata ma non le e stato assegnato un valore

// OBJECTS (e un oggetto come nei linguaggi OOP, ma in JS tutto e un oggetto)

// Null (è un tipo Object, ma rappresenta "nessun valore" -> concettualmente e un primitivo, ma tecnicamente e un oggetto)
let nullVariable = null;
let numbers = [1, 2, 3]; // Array (che e un tipo Object)
let person = {
	// Object literal
	name: "Riccardo",
	age: 30,
};

age = 31; // Riassegnazione di una variabile (funziona perche e dichiarata con let; se fosse const darebbe errore)

console.log(name + " ha " + age + " anni."); // Concatenazione di String
