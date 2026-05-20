# Note della lezione

- Il **controllo di flusso** (flow control) è il modo in cui un programma decide in quale ordine eseguire il codice. Di base, JavaScript esegue le istruzioni dall’alto verso il basso.
Il controllo di flusso serve a modificare questo comportamento:
* eseguire codice solo in certe condizioni (*if* e *switch*)
* ripetere operazioni (*for*, *while*, *do...while*)
* interrompere o saltare parti di codice (*break*)
* gestire errori (*try...catch*)
* aspettare operazioni asincrone (*async/await*)
- I **cicli booleani** sono cicli che continuano a eseguire codice finché una condizione booleana (*true* / *false*) rimane valida. Se la condizione non diventa mai *false*, il ciclo non termina. Vengono utilizzati quando è richiesto di ripetere un'operazione finché non si verifica uno specifico evento che rende la condizione *false* (input dell'utente, cambio di stato ecc.). Si differenzia dai *cicli classici* perché non ha un contatore finito e non si sa dopo quante interazioni verrà interrotto (non è una differenza tecnica reale ma è una differenza concettuale).