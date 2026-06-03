# La Lista dei Desideri su Database Non Relazionale

## Obiettivo didattico
Consolidamento dell'architettura Full-Stack backend. Integrazione dei meccanismi di persistenza dei dati mediante Mongoose ODM, mapping di schemi e interazione asincrona end-to-end.

## Specifiche di implementazione richieste:

1. Integrare all'interno del progetto del server Express la libreria ODM mongoose. Configurare e stabilire la connessione asincrona verso un'istanza locale o cloud di MongoDB associata a un database denominato wishlist_db.
2. Formalizzare lo schema Mongoose denominato ArticoloSchema per la mappatura di una lista desideri oggetti. Vincolare i campi del documento secondo i seguenti criteri formali: nomeOggetto (String, obbligatorio), prezzo (Number, obbligatorio) e comprato (Boolean, opzionale con valore inizializzato di default a false). Generare il relativo modello operativo Articolo.
3. Sostituire le strutture dati volatili in memoria: aggiornare l'endpoint GET /api/articoli in modo che esegua una query asincrona di estrazione sul database tramite il metodo await Articolo.find(). Isolare le istruzioni all'interno di logiche try...catch per intercettare guasti hardware.
4. Implementare l'endpoint di inserimento con metodo POST /api/articoli. Abilitare esplicitamente il middleware globale express.json(). La rotta deve intercettare l'oggetto JSON propagato nel body dal client, instanziare un nuovo documento conforme al modello Mongoose ed effettuarne il salvataggio asincrono persistente sul database tramite await nuovoArticolo.save(). Verificare l'esito delle chiamate ed il corretto inserimento dei record inviando payload di test mediante un client API (Postman / Thunder Client).