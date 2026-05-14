# Note della lezione

* L’**hoisting** è il comportamento per cui JavaScript registra dichiarazioni di variabili e funzioni all’inizio del loro scope durante la fase di compilazione/esecuzione del contesto. Con *var* la variabile viene inizializzata a undefined, mentre con *let* e *const* il binding esiste ma non può essere utilizzato prima della dichiarazione (*Temporal Dead Zone*).
La **TDZ** introdotta da *let* e *const* rende il codice più sicuro e prevedibile, perché evita accessi accidentali a variabili non ancora inizializzate, riducendo bug difficili da individuare.