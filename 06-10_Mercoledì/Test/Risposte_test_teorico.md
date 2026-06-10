# Quiz di Verifica: Fondamenti di React & Vite 
## Sezione 1: Vite & L'Ambiente di Sviluppo

### 1. Che cos'è **Vite** e per quale motivo lo si usa al posto di strumenti più vecchi (come Create React App) per creare un'applicazione React? Spiega brevemente come si avvia un nuovo progetto e come si lancia in esecuzione locale.

**Vite** è uno strumento di build moderno progettato per ottimizzare i flussi di lavoro, sostituendo le vecchie catene di compilazione macchinose.
Si usa al posto di *Create React App* per tre vantaggi principali:
- **Avvio rapido**: sfrutta i moduli ESM nativi del browser per caricare il codice senza lunghe pre-compilazioni.
- **HMR (Hot Module Replacement)**: riflette istantaneamente le modifiche nel browser durante la scrittura del codice.
- **Configurazione predefinita**: integra automaticamente estensioni JSX e fogli di stile senza interventi manuali.

Per inizializzare un progetto con *Vite* è necessario lanciare il comando `create-vite@latest nome-progetto --template react` lanciando il pacchetto con npm, npx, pnpm, yarn, bun ecc.
Dopo aver creato la struttura del progetto con *Vite* bisogna lanciare dentro la cartella il comando `npm install` per installare i moduli node e poi avviare il server locale con `npm run dev`


### 2. Quando crei un progetto React con Vite, noti che i file hanno l'estensione `.jsx` anziché `.js`. Che cos'è **JSX** e qual è il suo scopo principale all'interno di React?

**JSX** (*JavaScript XML*) è un'estensione della sintassi che permette di definire la struttura dell'interfaccia usando un linguaggio simile all'HTML direttamente all'interno del codice javascript. Lo scopo principale di questo "linguaggio" è semplificare la manutenzione del progetto, legando più strettamente la logica applicativa e la rappresentazione visiva.
Le caratteristiche fondamentali di **JSX** sono:
- **Trasformazione**: viene compilato in normali chiamate di funzioni javascript (*React.createElement*) che generano oggetti nativi.
- **Sicurezza**: React esegue l'escape automatico delle stringhe prima del rendering, prevenendo attacchi di tipo *Cross-Site Scripting*.
- **Dinamismo**: è possibile inserire espressioni javascript direttamente nel markup per renderlo dinamico senza utilizzare il prefisso `$` come nei template literals.

---

## Sezione 2: Architettura e Filosofia di React

### 3. Per quale motivo un'azienda o uno sviluppatore dovrebbe scegliere di usare **React** per costruire un'applicazione web rispetto al classico sviluppo con HTML, CSS e javascript nativo? Qual è il vantaggio principale della filosofia "a componenti"?

Uno dei motivi principali per scegliere **React** rispetto allo sviluppo tradizionale è il passaggio dal paradigma imperativo a quello dichiarativo.
Nello sviluppo classico, è necessario descrivere manualmente ogni passaggio per aggiornare l'interfaccia, rendendo il codice difficile da mantenere.
**React**, invece, permette di descrivere l'aspetto dell'interfaccia in base ai dati, delegando alla libreria l'aggiornamento nel browser.
I vantaggi tecnici di **React** sono:
- **Virtual DOM**: copia leggera del DOM creata in memoria e confrontata con il DOM reale per aggiornare solo gli elementi effettivamente cambiati, massimizzando le prestazioni.
- **Efficienza**: evita la manipolazione diretta e pesante del DOM del browser.
- **Modularità e riutilizzabilità**: è possibile costruire blocchi di codice autonomi e indipendenti che gestiscono singoli elementi dell'interfaccia e utilizzarli in più parti del progetto. Questo rende l'applicazione più scalabile e facile da manutenere.

### 4. Cosa sono le **Props** in React e come vengono utilizzate per far comunicare due componenti tra loro? Specifica in quale direzione viaggiano i dati (es. da padre a figlio o viceversa).

Le **Props** (*Properties*) sono oggetti javascript utilizzati per trasferire dati tra i componenti di un'applicazione *React*. I punti chiave del loro funzionamento sono:
- **Sintassi**: Si passano all'interno del JSX con una sintassi simile agli attributi HTML (es. <Profilo nome="Anna" />).
- **Direzione del flusso**: *React* impone un flusso di dati unidirezionale (top-down, come lo scope delle variabili nelle funzioni javascript), sempre ed esclusivamente dal componente genitore al componente figlio. Se un figlio deve inviare informazioni verso l'alto, il genitore deve passare con le **Props** una funzione di callback che verrà invocata dal figlio per "avvisare" il genitore di un evento.
- **Immutabilità**: per garantire stabilità e prevedibilità, le **Props** sono in sola lettura (read-only), cioè non possono essere modificate nel componente figlio.

---

## Sezione 3: State Management & Hooks Base

### 5. A cosa serve l'Hook **`useState`**? Spiega la differenza cruciale tra il variare una normale variabile javascript (es. `let count = 0; count++`) e l'utilizzare la funzione di update dello stato di React.

L'Hook **`useState`** serve per istanziare e gestire lo Stato all'interno di un componente, ovvero quelle variabili private che descrivono la condizione corrente del componente.
La differenza cruciale tra una normale variabile e lo stato risiede nella reattività: modificare una variabile locale è inutile ai fini dell'interfaccia perché non è monitorata da React e quindi non innesca alcun aggiornamento grafico. Inizializzando invece una variabile con **`useState`** e utilizzando la funzione di update, si notifica al framework che i dati sono cambiati avviando automaticamente un ciclo di re-rendering.

### 6. Descrivi l'Hook **`useEffect`**. A cosa serve e in quali occasioni viene utilizzato? Spiega inoltre l'importanza del "vettore delle dipendenze" (dependency array) inserendo un esempio di cosa succede se lo lasci vuoto `[]`.

L'Hook **`useEffect`** fornisce un canale per gestire gli effetti collaterali, cioè operazioni logiche che esulano dal calcolo della rappresentazione visiva e che devono vengono eseguite dopo il rendering. Viene utilizzato principalmente per:
- *Data fetching* con *API* esterne.
- Timer e intervalli come `setTimeout` o `setInterval`.
- Connessioni *WebSocket*.
- Ascolto di eventi globali del browser, come *scroll* o *resize*.
- Mutazioni manuali del DOM esterno a React.

Il **dependency array** è il secondo parametro dell'Hook e serve a controllare la frequenza di esecuzione dell'effetto: React riesegue il codice interno solo se almeno uno dei valori nel vettore subisce una modifica rispetto al rendering precedente. Se il vettore è vuoto, l'effetto viene eseguito una sola volta, esclusivamente durante la fase di montaggio (Mounting) del componente. Ad esempio, utilizzare un vettore delle dipedenze vuoto, è utile quando bisogna recuperare dei dati da un'API ed evitare di richiamarla ad ogni re-rendering.

---

## Sezione 4: Rotte, API e Comunicazione Dati

### 7. Che cos'è **Axios** e perché lo si integra in un'applicazione React? In quale momento del ciclo di vita di un componente (o in combinazione con quale Hook) viene solitamente inserita una chiamata API per mostrare i dati all'avvio della pagina?

**Axios** è una libreria javascript utilizzata per effettuare richieste HTTP (come GET o POST) verso un server o un'API esterna. Viene utilizzata per diversi motivi pratici:
- **Semplicità**: offre una sintassi più concisa rispetto alla fetch nativa.
- **Trasformazione automatica**: converte automaticamente i dati in formato JSON, sia in entrata che in uscita.
- **Gestione errori**: Permette una gestione più strutturata degli errori di rete tramite blocchi `try...catch`.


Una chiamata API per caricare dati viene solitamente inserita all'interno dell'Hook useEffect con un vettore di dipendenze vuoto in modo che l'operazione avvenga solo durante la fase di Montaggio (Mounting), cioè quando il componente viene inserito nel DOM per la prima volta.

### 8. A cosa serve la libreria **React Router**? Spiega il concetto di Single Page Application (SPA) e come React Router permetta all'utente di navigare tra diverse "pagine" senza ricaricare il browser.

Il termine **SPA** (*Single Page Application*) si riferisce a un'applicazione web che, a differenza dei siti tradizionali, non ricarica l'intera pagina ogni volta che l'utente interagisce con essa, ma grazie alla manipolazione dinamica del DOM, l'applicazione aggiorna solo le porzioni di interfaccia necessarie, garantendo un'esperienza fluida e reattiva.
In una SPA, quindi, la "navigazione" non consiste nel caricare nuovi file HTML dal server, ma nello scambiare i componenti visualizzati a schermo in base allo stato dell'applicazione.

**React Router** è la libreria standard utilizzata in *React* per simulare il routing (ovvero la navigazione) di una **MPA** (*Multi Page Application*) in una SPA.
In pratica permette di:
- **Sincronizzare l'interfaccia con l'URL**: associa componenti specifici a determinati percorsi del browser (es. `/prodotti` mostra il componente `Catalogo`).
- **Navigare senza ricaricare**: utilizza componenti come `<Link>` al posto dei classici tag `<a>` per cambiare l'URL senza innescare un refresh del browser, mantenendo lo stato dell'applicazione.
- **Gestire la cronologia**: permette all'utente di usare i tasti "Avanti" e "Indietro" del browser proprio come in un sito multipagina, pur rimanendo all'interno della stessa istanza javascript.

In sintesi, trasforma la navigazione in un cambio di stato dell'interfaccia.


---

## Sezione 5: Gestione dello Stato Avanzata

### 9. Cosa si intende con il termine **"Props Drilling"**? Spiega perché può diventare un problema nei progetti che crescono di dimensione e descrivi brevemente lo scenario in cui si verifica.

Con il termine **"Props Drilling"** si intende iil passaggio di dati (con appunto le *Props*) attraverso diversi componenti per consegnarli a un componente figlio annidato che ne ha effettivamente bisogno. Si verifica quando un componente genitore detiene uno stato richiesto da un discendente molto lontano: a causa del flusso unidirezionale di *React*, ogni componente intermedio deve ricevere la *Prop* e ri-trasmetterla verso il basso, fungendo da semplice passacarte.

Man mano che il progetto e il codice crescono, questa pratica causa un accoppiamento rigido dei componenti rendendo difficile la manutenzione e il refactoring: la modifica di una singola *Prop* richiederebbe interventi manuali su tutta la catena di componenti, aumentando il rischio di errori e stati incoerenti.

### 10. Che cos'è **Zustand** e in che modo risolve il problema del *Props Drilling* accennato nella domanda precedente? Qual è il suo vantaggio principale in termini di semplicità rispetto ad altri sistemi di stato globale?

**Zustand** è una libreria per la gestione dello *Stato globale* in *React* (contrariamente ad **`useState`** che gestisce solo uno *Stato locale* del componente). Risolve il problema del *Props Drilling* permettendo ai componenti di accedere direttamente a uno store condiviso, senza dover passare i dati attraverso la gerarchia di componenti tramite *Props*.
Il vantaggio principale di **Zustand** è la semplicità: rispetto a soluzione come *Redux*, richiede poca configurazione, ha un’API minimale, più leggera e intuitiva