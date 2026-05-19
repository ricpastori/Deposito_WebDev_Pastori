// Creazione oggetto
const person = {
	name: "Mario",
	age: 30,
};

// Accesso proprietà
console.log(person.name); // Mario
console.log(person["age"]); // 30. All'interno dell'oggetto le chiavi vengono viste come chiavi ma se vengono utilizzate fuori dall'oggetto sono semplici stringhe

// Modifica proprietà
person.age = 31;

// Aggiunta proprietà
person.city = "Milano";

console.log(person.age);
console.log(person.city);

// Rimozione proprietà
delete person.city;

// Metodi utili
const keys = Object.keys(person); // ["nome", "eta"]
const values = Object.values(person); // ["Mario", 31]
const entries = Object.entries(person); // [["nome","Mario"],["eta",31]]
