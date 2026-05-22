# Offerta tecnica - Sito web Cuore a Zampe

## Premessa

Cuore a Zampe ha bisogno di un sito web chiaro, semplice da consultare e pensato per aiutare le persone interessate all'adozione a trovare informazioni affidabili prima di contattare il centro.

La proposta prevede la realizzazione di un sito statico responsive, adatto alla pubblicazione online e consultabile da computer, tablet e smartphone.

## Obiettivi del progetto

- Presentare l'identità del centro e il suo approccio all'adozione responsabile.
- Mostrare i cani disponibili con schede ordinate e facili da leggere.
- Spiegare il percorso di adozione in modo trasparente.
- Offrire un primo punto di contatto tramite modulo di richiesta informazioni.
- Creare una base tecnica ordinata, facilmente aggiornabile in futuro.

## Pagine previste

### Home page

La home page introduce il centro, racconta i servizi principali e mostra una selezione di cani in evidenza. La pagina serve a dare subito fiducia al visitatore e a guidarlo verso il catalogo o verso il percorso di adozione.

### Pagina cani adottabili

La pagina contiene le schede dei cani disponibili, con nome, immagine, carattere, età, taglia e contesto consigliato. È previsto un filtro per visualizzare rapidamente cani tranquilli, attivi o cuccioli.

### Pagina adozione

La pagina spiega le fasi del percorso: colloquio iniziale, incontro al centro e inserimento in famiglia. Include anche un modulo di richiesta informazioni per raccogliere i dati principali della persona interessata.

## Funzionalità incluse

- Navigazione tra tre pagine HTML collegate tra loro.
- Layout responsive per desktop, tablet e smartphone.
- Menu hamburger nella versione mobile.
- Tipografia con Inter per i testi e Fraunces per i titoli principali.
- Schede dei cani con immagini e informazioni sintetiche.
- Filtro interattivo nella pagina dei cani.
- Modulo di contatto con messaggio di conferma a video.
- Stili separati per tema generale e singole pagine.
- Script JavaScript separati e caricati solo nelle pagine in cui servono.

## Soluzione tecnica

Il sito viene sviluppato senza framework, utilizzando HTML, CSS e JavaScript. Questa scelta rende il progetto leggero, veloce da caricare e semplice da mantenere.

Il CSS è organizzato in una cartella dedicata agli stili, con un file di tema comune e file specifici per le singole pagine. Il JavaScript è separato per funzionalità: il filtro viene caricato solo nella pagina dei cani, mentre lo script del modulo viene caricato solo nella pagina adozione.

## Metodo di sviluppo

Lo sviluppo è stato svolto con supporto AI assisted: l'AI è stata usata come strumento di affiancamento per velocizzare alcune bozze, gestire parti ripetitive e preparare contenuti segnaposto, come le schede dei cani. Le scelte finali su struttura, contenuti, organizzazione dei file e controllo del risultato sono state gestite manualmente.

## Esclusioni e sviluppi futuri

La versione proposta è statica. Il modulo mostra una conferma nella pagina, ma non invia ancora email o dati a un gestionale. Per una versione definitiva online si potranno aggiungere:

- invio reale del modulo tramite servizio email o backend;
- pannello di gestione per aggiornare le schede dei cani;
- pagina privacy e cookie policy;
- pubblicazione su hosting o GitHub Pages;
- ottimizzazione SEO avanzata;
- integrazione con fotografie e contenuti reali del centro.

## Struttura della consegna

```text
Test_pratico_22_maggio/
├── README.md
├── index.html              # Home page del sito
├── dogs.html               # Catalogo dei cani adottabili
├── adoption.html           # Percorso di adozione e modulo informazioni
└── assets/
    ├── styles/
    │   ├── theme.css       # Variabili di tema e stili condivisi
    │   ├── home.css        # Stili specifici della home page
    │   ├── dogs.css        # Stili specifici del catalogo cani
    │   └── adoption.css    # Stili specifici della pagina adozione
    └── scripts/
        ├── dogs.js         # Filtro delle schede dei cani
        └── adoption.js     # Messaggio del form di richiesta
```

## To do per completare la versione finale

- Sostituire le immagini dimostrative con fotografie reali.
- Inserire testi approvati dal cliente.
- Collegare il modulo a un sistema di invio effettivo.
- Aggiungere pagina privacy e trattamento dati.
- Pubblicare il sito online.
