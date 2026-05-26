// Restituisce il numero più grande
function massimo(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

// Controlla se un numero è pari
function pari(numero) {
	return numero % 2 === 0;
}

// Esporto tutte le funzioni
module.exports = {
	massimo,
	pari,
};
