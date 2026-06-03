# Le API REST del Negozio di Videogiochi

## Obiettivo didattico
Configurazione sistematica di un'architettura server Express.js, gestione formale degli endpoint di instradamento e serializzazione di payload in formato JSON.

## Specifiche di implementazione richieste:

1. Inizializzare un ambiente Node.js coerente mediante il comando npm init -y ed installare la dipendenza di Express.js. Strutturare il punto di ingresso configurando il server in ascolto sulla porta di rete 5000.
2. Dichiarare a livello di codice un array globale immutabile denominato videogiochi contenente oggetti semistrutturati hardcoded (ciascuno provvisto dei campi: id numerico, titolo stringa e piattaforma stringa).
3. Implementare l'endpoint con metodo GET /api/giochi. La funzione deve restituire lo status HTTP 200 unito all'intero array serializzato in formato JSON.
4. Implementare l'endpoint dinamico con metodo GET /api/giochi/:id. La callback deve estrarre il parametro dall'URL (req.params.id), effettuare una scansione filtrata dell'array tramite il metodo nativo .find() e restituire il singolo oggetto individuato. Qualora l'ID non corrisponda a nessun elemento, forzare l'invio dello status HTTP 404 accoppiato a un payload JSON strutturato: { errore: "Risorsa non individuata nel sistema" }.