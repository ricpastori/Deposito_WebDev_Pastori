-- Questo file contiene query di lettura.
-- In SQL si usa SELECT per chiedere al database di mostrare dei dati.
-- A differenza di INSERT, UPDATE e DELETE, SELECT non modifica le tabelle: legge soltanto.

-- SELECT indica quali colonne vogliamo vedere nel risultato.
-- FROM indica da quale tabella leggere i dati.
-- WHERE filtra le righe: qui prendiamo solo i lettori che vivono a Napoli oppure a Milano.
-- OR significa "oppure": basta che una delle due condizioni sia vera.
SELECT name, surname FROM Readers WHERE city='Napoli' OR city='Milano';

-- COUNT(*) conta quante righe ci sono in ogni gruppo.
-- AS readers_number assegna un nome piu' leggibile alla colonna calcolata.
-- GROUP BY city raggruppa i lettori per citta': una riga di risultato per ogni citta'.
SELECT city, COUNT(*) as readers_number FROM Readers GROUP BY city;

-- HAVING filtra i gruppi dopo il GROUP BY.
-- WHERE filtra le singole righe prima del raggruppamento; HAVING filtra il risultato aggregato.
-- Qui vediamo solo le citta' con almeno 2 lettori.
SELECT city, COUNT(*) as readers_number FROM Readers GROUP BY city HAVING readers_number>=2;

-- INNER JOIN unisce righe di due tabelle quando la condizione indicata e' vera.
-- Qui colleghiamo Readers a Education_titles:
-- Readers.education_title_id contiene l'id del titolo di studio del lettore.
-- Education_titles.id e' l'id effettivo nella tabella dei titoli di studio.
-- Il risultato mostra il codice fiscale del lettore e il nome del suo titolo di studio.
SELECT fiscal_code, Education_titles.education_title FROM Readers INNER JOIN Education_titles on(Readers.education_title_id=Education_titles.id);

-- Questa e' la stessa unione tra Readers ed Education_titles, ma con un filtro in piu'.
-- LIKE serve per cercare testi che seguono un certo modello.
-- Il simbolo % significa "qualsiasi sequenza di caratteri".
-- '%degree' significa: testi che finiscono con la parola degree.
SELECT fiscal_code, education_title
FROM Readers
INNER JOIN Education_titles on(Readers.education_title_id=Education_titles.id)
WHERE education_title like '%degree';

-- Questa query conta quanti prestiti ha ogni lettore.
-- Loans.reader_id viene collegato a Readers.id per sapere a quale lettore appartiene ogni prestito.
-- COUNT(reader_id) conta i prestiti trovati per ciascun lettore.
-- loans e' un alias: da' un nome alla colonna calcolata.
-- HAVING loans > 1 mostra solo i lettori con piu' di un prestito.
SELECT name, surname, COUNT(reader_id) loans FROM Readers
INNER JOIN Loans on(Loans.reader_id=Readers.id) GROUP BY name, surname HAVING loans > 1;

-- Anche qui uniamo Readers e Loans, ma non contiamo i prestiti.
-- GROUP BY name, surname evita di mostrare piu' volte lo stesso lettore se ha piu' prestiti.
-- Con INNER JOIN vengono mostrati solo i lettori che hanno almeno un prestito collegato.
SELECT name, surname FROM Readers
INNER JOIN Loans on(Loans.reader_id=Readers.id) GROUP BY name, surname;

-- LEFT JOIN mostra tutte le righe della tabella a sinistra, cioe' Readers.
-- Se un lettore non ha prestiti, i campi provenienti da Loans saranno NULL.
-- Questa query quindi parte da tutti i lettori e prova ad agganciare i loro prestiti.
SELECT fiscal_code FROM Readers
LEFT JOIN Loans on(Loans.reader_id=Readers.id);

-- Anche questo e' un LEFT JOIN, ma la tabella a sinistra e' Loans.
-- La condizione WHERE Loans.id is null cerca righe in cui l'id del prestito e' NULL.
-- Pero' Loans e' la tabella di partenza: se una riga arriva da Loans, il suo id normalmente esiste.
-- Per questo motivo questa query non e' utile per trovare lettori senza prestiti.
SELECT fiscal_code FROM Loans
LEFT JOIN Readers on(Loans.reader_id=Readers.id) WHERE Loans.id is null;

-- RIGHT JOIN e' simile al LEFT JOIN, ma mantiene tutte le righe della tabella a destra.
-- Qui la tabella a destra e' Readers, quindi vengono considerati tutti i lettori.
-- WHERE Loans.id is null filtra i casi in cui non e' stato trovato nessun prestito collegato.
-- Questa query serve a trovare i lettori che non hanno prestiti.
SELECT fiscal_code FROM Loans
RIGHT JOIN Readers on(Loans.reader_id=Readers.id) WHERE Loans.id is null;

-- Questa query e' uguale alla precedente: sembra una ripetizione usata per esercizio o confronto.
SELECT fiscal_code FROM Loans
RIGHT JOIN Readers on(Loans.reader_id=Readers.id) WHERE Loans.id is null;
