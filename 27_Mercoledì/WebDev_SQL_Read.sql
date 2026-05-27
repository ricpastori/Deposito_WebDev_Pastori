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
-- WHERE Loans.id is null tiene solo i lettori per cui non e' stato trovato nessun prestito.
-- Questa query quindi trova i lettori senza prestiti.
SELECT fiscal_code FROM Readers
LEFT JOIN Loans on(Loans.reader_id=Readers.id) WHERE Loans.id is null;

-- ESEMPIO DI LEFT JOIN
-- La tabella a sinistra e' Readers, quindi il risultato mantiene tutti i lettori.
-- Se un lettore ha uno o piu' prestiti, vedremo anche i dati di Loans.
-- Se un lettore non ha prestiti, loan_id e operation_date saranno NULL.
-- Mostrare colonne di entrambe le tabelle rende visibile che cosa e' stato collegato.
SELECT
    Readers.id AS reader_id,
    Readers.fiscal_code,
    Loans.id AS loan_id,
    Loans.operation_date
FROM Readers
LEFT JOIN Loans ON Loans.reader_id = Readers.id;

-- ESEMPIO DI RIGHT JOIN
-- La tabella a destra e' Loans, quindi il risultato mantiene tutti i prestiti.
-- Readers viene collegata solo quando esiste un lettore con id uguale a Loans.reader_id.
-- Nel nostro database un prestito dovrebbe sempre avere un lettore valido, grazie alla FOREIGN KEY.
-- In generale, se un prestito non avesse lettore, reader_id e fiscal_code sarebbero NULL.
SELECT
    Readers.id AS reader_id,
    Readers.fiscal_code,
    Loans.id AS loan_id,
    Loans.operation_date
FROM Readers
RIGHT JOIN Loans ON Loans.reader_id = Readers.id;

-- ESEMPIO DI FULL JOIN
-- FULL JOIN mantiene tutte le righe di entrambe le tabelle.
-- Quindi mostra:
-- lettori con prestiti, lettori senza prestiti e anche eventuali prestiti senza lettore.
-- Quando manca una corrispondenza, i campi dell'altra tabella diventano NULL.
-- MySQL non supporta direttamente FULL JOIN.
-- In un database che supporta FULL JOIN, la forma sarebbe:
-- SELECT ... FROM Readers FULL JOIN Loans ON Loans.reader_id = Readers.id;
-- In MySQL lo simuliamo facendo un LEFT JOIN piu' un RIGHT JOIN collegati con UNION.
SELECT
    Readers.id AS reader_id,
    Readers.fiscal_code,
    Loans.id AS loan_id,
    Loans.operation_date
FROM Readers
LEFT JOIN Loans ON Loans.reader_id = Readers.id
UNION
SELECT
    Readers.id AS reader_id,
    Readers.fiscal_code,
    Loans.id AS loan_id,
    Loans.operation_date
FROM Readers
RIGHT JOIN Loans ON Loans.reader_id = Readers.id;

-- ESEMPIO DI UNION
-- UNION non affianca colonne come un JOIN: mette i risultati uno sotto l'altro.
-- Le SELECT unite da UNION devono avere lo stesso numero di colonne, con tipi compatibili.
-- UNION elimina le righe duplicate.
-- Qui usiamo due volte la stessa ricerca: anche se "Milano" compare piu' volte, nel risultato resta una sola volta.
SELECT city AS example_value
FROM Readers
WHERE city = 'Milano'
UNION
SELECT city AS example_value
FROM Readers
WHERE city = 'Milano';

-- ESEMPIO DI UNION ALL
-- UNION ALL funziona come UNION, ma non elimina i duplicati.
-- Qui la stessa ricerca viene eseguita due volte e le righe duplicate rimangono nel risultato.
-- E' utile quando i duplicati hanno significato oppure quando vogliamo contare tutte le righe prodotte.
SELECT city AS example_value
FROM Readers
WHERE city = 'Milano'
UNION ALL
SELECT city AS example_value
FROM Readers
WHERE city = 'Milano';
