# Il Convertitore di Stringhe Asincrono

## Obiettivo didattico
Assimilare i meccanismi di scomposizione temporale e astrazione sintattica mediante l'uso sequenziale di Callback, Promise e costrutti Async/Await.

## Specifiche di implementazione richieste:

1. Sviluppare una routine denominata invertiStringaAsincrona(testo, callback). L'applicazione deve impostare un timer asincrono (setTimeout) con un delay di 1500ms in background. Al completamento, deve convertire la stringa in caratteri maiuscoli ed iniettarla come argomento della callback. Verificare l'esecuzione in console.
2. Effettuare il refactoring della funzione: rimuovere il parametro callback e forzare la funzione a restituire un'istanza di Promise. Qualora il parametro testo risulti essere una stringa vuota, la promessa deve invocare immediatamente il reject() distribuendo una stringa descrittiva di errore.
3. Consumare la Promise generata implementando dapprima la sintassi a catena con i metodi nativi .then() e .catch().
4. Creare un blocco funzionale separato marcato come async ed eseguire l'estrazione lineare del medesimo valore tramite l'operatore await racchiuso dentro un blocco di controllo try...catch.