-- Questo file contiene uno script SQL.
-- Uno script SQL e' una sequenza di comandi che il database esegue dall'alto verso il basso.
-- In questo caso stiamo creando il database di una piccola biblioteca:
-- libri, generi, autori, editori, lettori, copie fisiche dei libri, contatti e prestiti.

-- CREATE TABLE serve a creare una nuova tabella.
-- Una tabella e' simile a un foglio Excel: ha colonne fisse e molte righe di dati.
CREATE TABLE Books(
-- id e' un identificatore numerico: ogni libro avra' un id diverso.
-- PRIMARY KEY significa "chiave primaria": identifica in modo unico ogni riga.
-- AUTO_INCREMENT dice al database di aumentare automaticamente il numero a ogni nuovo inserimento.
id int PRIMARY KEY AUTO_INCREMENT,
-- CHAR(13) indica una stringa lunga esattamente 13 caratteri, utile per codici ISBN.
isbn_code char(13),
-- VARCHAR(100) indica una stringa di lunghezza variabile, al massimo 100 caratteri.
title varchar(100),
-- NOT NULL significa che il campo e' obbligatorio: non puo' rimanere vuoto.
-- Questi tre id collegano Books ad altre tabelle: Genres, Authors e Publishers.
id_genre int not null,
id_author int not null,
id_publisher int not null,
-- INT indica un numero intero.
publication_year int,
-- INDEX crea un indice: aiuta il database a cercare piu' velocemente per quella colonna.
index(isbn_code),
index(title)
);

-- Tabella dei generi letterari, per esempio Mystery, Drama, Horror.
CREATE TABLE Genres(
id int PRIMARY KEY AUTO_INCREMENT,
genre varchar(100) not null,
-- UNIQUE INDEX significa che non possono esistere due generi con lo stesso nome.
UNIQUE INDEX(genre)
);

-- Tabella degli autori.
CREATE TABLE Authors(
id int PRIMARY KEY AUTO_INCREMENT,
author varchar(100) not null,
-- Anche qui il nome dell'autore viene reso unico.
UNIQUE INDEX(author)
);

-- Tabella degli editori.
CREATE TABLE Publishers(
id int PRIMARY KEY AUTO_INCREMENT,
publishers varchar(100) not null
);

-- CREATE INDEX aggiunge un indice a una tabella gia' esistente.
-- UNIQUE indica che il valore indicizzato non puo' essere duplicato.
-- Attenzione: questo comando usa la colonna "publisher"; nella tabella sopra la colonna si chiama "publishers".
CREATE UNIQUE INDEX idx_publisher on Publishers(publisher);

-- ALTER TABLE modifica una tabella gia' creata.
-- ADD CONSTRAINT aggiunge una regola al database.
-- FOREIGN KEY crea una "chiave esterna": il valore in Books.id_genre deve esistere in Genres.id.
-- Questo impedisce di assegnare a un libro un genere inesistente.
ALTER TABLE Books
ADD CONSTRAINT fk_Books_genres
FOREIGN KEY (id_genre) REFERENCES genres(id);

-- Qui si collega ogni libro a un autore esistente.
ALTER TABLE Books
ADD FOREIGN KEY (id_author) REFERENCES authors(id);

-- Qui si collega ogni libro a un editore esistente.
ALTER TABLE Books
ADD CONSTRAINT fk_Books_Publishers
FOREIGN KEY (id_publisher)
REFERENCES Publishers(id);

-- Tabella dei tipi di contatto, per esempio email o telefono.
CREATE TABLE Contact_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contact_type VARCHAR(50)
);

-- Tabella dei titoli di studio.
CREATE TABLE Education_titles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- NOT NULL rende il valore obbligatorio; UNIQUE evita duplicati.
    education_title VARCHAR(50) NOT NULL UNIQUE
);

-- Tabella dei lettori iscritti alla biblioteca.
CREATE TABLE Readers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- Codice pubblico del lettore: e' diverso dall'id tecnico usato dal database.
    reader_code CHAR(10) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    -- DATE memorizza una data nel formato anno-mese-giorno.
    birth_date DATE,
    -- ENUM limita i valori ammessi: qui solo 'M' oppure 'F'.
    gender ENUM('M', 'F') NOT NULL,
    fiscal_code CHAR(16) UNIQUE,
    -- education_title_id punta alla tabella Education_titles.
    education_title_id INT NOT NULL,
    address VARCHAR(100),
    zip_code CHAR(5),
    city VARCHAR(50),
    province CHAR(2),
    username VARCHAR(5),
    -- Questa chiave esterna obbliga education_title_id a riferirsi a un titolo di studio valido.
    FOREIGN KEY (education_title_id) REFERENCES Education_titles(id)
);

-- Tabella dell'inventario: non descrive il libro in generale, ma le singole copie fisiche.
-- Per esempio lo stesso libro puo' avere due copie, ognuna con un codice diverso.
CREATE TABLE Inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- book_id collega questa copia fisica a un libro della tabella Books.
    book_id INT NOT NULL,
    book_code CHAR(10) NOT NULL UNIQUE,
    shelf_code CHAR(6) UNIQUE,
    load_date DATE,
    -- BOOLEAN rappresenta un valore vero/falso.
    loaned BOOLEAN,
    -- DECIMAL(5,2) memorizza numeri con 5 cifre totali, di cui 2 decimali.
    -- CHECK impone una condizione: il prezzo deve essere maggiore o uguale a zero.
    purchase_price DECIMAL(5,2) CHECK (purchase_price >= 0),
    disposal_price DECIMAL(5,2) CHECK (disposal_price >= 0),
    FOREIGN KEY (book_id) REFERENCES Books(id)
);

-- Tabella dei contatti dei lettori.
-- Separare i contatti in una tabella permette di avere piu' contatti per lo stesso lettore.
CREATE TABLE Contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reader_id INT NOT NULL,
    contact_type_id INT NOT NULL,
    contact VARCHAR(50),
    -- Ogni contatto appartiene a un lettore e a un tipo di contatto.
    FOREIGN KEY (reader_id) REFERENCES Readers(id),
    FOREIGN KEY (contact_type_id) REFERENCES Contact_types(id),
    -- Questa UNIQUE evita di registrare due volte lo stesso contatto per lo stesso lettore e tipo.
    UNIQUE (reader_id, contact_type_id, contact)
);

-- Tabella dei prestiti.
-- Ogni riga rappresenta una copia presa in prestito da un lettore.
CREATE TABLE Loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reader_id INT NOT NULL,
    inventory_id INT NOT NULL,
    -- Le varie date descrivono le fasi del prestito.
    operation_date DATE,
    withdrawal_date DATE,
    return_date DATE,
    actual_return_date DATE,
    notes VARCHAR(500),
    FOREIGN KEY (reader_id) REFERENCES Readers(id),
    FOREIGN KEY (inventory_id) REFERENCES Inventory(id)
);

-- INSERT INTO aggiunge nuove righe a una tabella.
-- Tra parentesi si indicano le colonne da compilare.
-- Dopo VALUES si elencano i valori da inserire, nello stesso ordine delle colonne.
INSERT INTO Education_titles(education_title) VALUES
('school leaving certificate'), ('bachelor degree'), ('master’s degree'), ('postgraduate diploma'), ('phd');

-- UPDATE modifica righe gia' esistenti.
-- SET indica il nuovo valore.
-- WHERE e' fondamentale: limita la modifica solo alle righe che rispettano la condizione.
UPDATE Education_titles SET education_title="bachelor's degree" WHERE id=2;

-- Inserimento di piu' lettori in una sola istruzione INSERT.
-- Ogni coppia di parentesi dopo VALUES rappresenta una nuova riga.
INSERT INTO Readers(
    reader_code,
    name,
    surname,
    birth_date,
    gender,
    fiscal_code,
    address,
    zip_code,
    city,
    province,
    username,
    education_title_id
)
VALUES
('L001', 'Marco', 'Rossi', '1985-03-12', 'M', 'RSSMRC85C12H501Z', 'Via Roma 15', '20121', 'Milano', 'MI', 'marco.rossi', 1),
('L002', 'Giulia', 'Bianchi', '1992-07-24', 'F', 'BNCGLI92L64H501A', 'Corso Vittorio Emanuele 8', '10121', 'Torino', 'TO', 'giulia.bianchi', 1),
('L003', 'Antonio', 'Verdi', '2000-11-05', 'M', 'VRDNTN00S05F205W', 'Via dei Mille 42', '80121', 'Napoli', 'NA', 'antonio.verdi', 1),
('L004', 'Elena', 'Ferrari', '1978-05-18', 'F', 'FRRLNE78E58H501X', 'Via Dante 7', '50122', 'Firenze', 'FI', 'elena.ferrari', 2),
('L005', 'Alessandro', 'Russo', '1995-09-30', 'M', 'RSSLSS95P30G273O', 'Via Garibaldi 103', '90133', 'Palermo', 'PA', 'alessandro.russo', 2),
('L006', 'Sofia', 'Esposito', '1988-12-02', 'F', 'SPSSF88T42F205F', 'Piazza Trieste e Trento 4', '80132', 'Napoli', 'NA', 'sofia.esposito', 3),
('L007', 'Francesco', 'Romano', '2003-01-15', 'M', 'RMNFNC03A15R897U', 'Via Nazionale 220', '00184', 'Roma', 'RM', 'francesco.romano', 3),
('L008', 'Chiara', 'Gallo', '1990-04-08', 'F', 'GLLCHR90D48L219Y', 'Corso Cavour 51', '10123', 'Torino', 'TO', 'chiara.gallo', 4),
('L009', 'Davide', 'Conti', '1982-08-21', 'M', 'CNTDVD82M21H501E', 'Via Torino 89', '20123', 'Milano', 'MI', 'davide.conti', 4),
('L010', 'Beatrice', 'Marini', '1997-10-10', 'F', 'MRNBRT97R50H501I', 'Viale Monza 14', '20125', 'Milano', 'MI', 'beatrice.marini', 4);

-- Questo inserimento puo' andare in errore se non esiste un titolo di studio con id = 5.
-- La FOREIGN KEY su education_title_id obbliga il valore 5 a essere gia' presente in Education_titles(id).
INSERT INTO Readers(
    reader_code,
    name,
    surname,
    birth_date,
    gender,
    fiscal_code,
    address,
    zip_code,
    city,
    province,
    username,
    education_title_id
)
VALUES
('L011', 'Matteo', 'Greco', '1991-06-14', 'M', 'GRCMTT91H14F839K', 'Via Leopardi 33', '70121', 'Bari', 'BA', 'matteo.greco', 5);

-- Qui viene specificato anche il campo id.
-- Di solito, con AUTO_INCREMENT, l'id si lascia generare al database.
-- Specificarlo a mano puo' essere utile in alcuni casi, ma bisogna evitare duplicati.
INSERT INTO Readers(
	id,
    reader_code,
    name,
    surname,
    birth_date,
    gender,
    fiscal_code,
    address,
    zip_code,
    city,
    province,
    username,
    education_title_id
)
VALUES
('12', 'L011', 'Matteo', 'Greco', '1991-06-14', 'M', 'GRCMTT91H14F839K', 'Via Leopardi 33', '70121', 'Bari', 'BA', 'matteo.greco', 4);

-- DELETE elimina righe da una tabella.
-- Anche qui WHERE e' molto importante: senza WHERE verrebbero cancellati tutti i lettori.
DELETE from Readers WHERE fiscal_code='CNTDVD82M21H501E';

-- Nuovo inserimento di un lettore dopo la cancellazione precedente.
INSERT INTO Readers(
    reader_code,
    name,
    surname,
    birth_date,
    gender,
    fiscal_code,
    address,
    zip_code,
    city,
    province,
    username,
    education_title_id
)
VALUES
('L012', 'Valentina', 'Costa', '1999-02-27', 'F', 'CSTVNT99B67D612Q', 'Via Mazzini 12', '16121', 'Genova', 'GE', 'valentina.costa', 4);

-- Inserimento dei generi che poi saranno richiamati dai libri tramite id_genre.
INSERT INTO Genres(genre)
VALUES
('Mystery'),
('Drama'),
('Dystopian'),
('Romance'),
('Horror');

-- Inserimento degli autori che poi saranno richiamati dai libri tramite id_author.
INSERT INTO Authors(author)
VALUES
('Umberto Eco'),
('Haruki Murakami'),
('George Orwell'),
('Jane Austen'),
('Bram Stoker');

-- Inserimento degli editori.
-- Attenzione: questo INSERT usa la colonna "publisher"; nella CREATE TABLE sopra compare "publishers".
INSERT INTO Publishers(publisher)
VALUES
('Mondadori'),
('Einaudi'),
('Feltrinelli'),
('Rizzoli'),
('Bompiani');

-- Inserimento dei libri.
-- Gli id di genere, autore ed editore devono corrispondere a righe gia' presenti nelle rispettive tabelle.
INSERT INTO Books(
    isbn_code,
    title,
    id_genre,
    id_author,
    id_publisher,
    publication_year
)
VALUES
('9788804668236', 'Il nome della rosa', 1, 1, 1, 1980),
('9788806229640', 'Norwegian Wood', 2, 2, 2, 1987),
('9788807881557', '1984', 3, 3, 3, 1949),
('9788804701872', 'Kafka sulla spiaggia', 2, 2, 2, 2002),
('9788804677214', 'Il pendolo di Foucault', 1, 1, 5, 1988),
('9788807902894', 'La fattoria degli animali', 3, 3, 3, 1945),
('9788817108057', 'Orgoglio e pregiudizio', 4, 4, 4, 1813),
('9788820062216', 'Dracula', 5, 5, 5, 1897),
('9788806218255', 'Dance Dance Dance', 2, 2, 2, 1988),
('9788807902887', 'Omaggio alla Catalogna', 3, 3, 3, 1938);

-- Inserimento delle copie fisiche dei libri in inventario.
-- book_id indica di quale libro si tratta; book_code identifica la singola copia.
-- NULL significa "nessun valore": qui disposal_price e' vuoto perche' la copia non e' stata dismessa.
INSERT INTO Inventory(
    book_id,
    book_code,
    shelf_code,
    load_date,
    loaned,
    purchase_price,
    disposal_price
)
VALUES
(1, 'B001-C001', 'A01-01', '2025-01-10', FALSE, 18.90, NULL),
(1, 'B001-C002', 'A01-02', '2025-01-10', FALSE, 18.90, NULL),
(2, 'B002-C001', 'A02-01', '2025-01-15', FALSE, 16.50, NULL),
(2, 'B002-C002', 'A02-02', '2025-01-15', FALSE, 16.50, NULL),
(3, 'B003-C001', 'A03-01', '2025-02-01', FALSE, 12.90, NULL),
(3, 'B003-C002', 'A03-02', '2025-02-01', FALSE, 12.90, NULL),
(4, 'B004-C001', 'A04-01', '2025-02-10', FALSE, 19.90, NULL),
(5, 'B005-C001', 'A05-01', '2025-02-12', FALSE, 21.00, NULL),
(6, 'B006-C001', 'A06-01', '2025-03-01', FALSE, 10.90, NULL),
(7, 'B007-C001', 'A07-01', '2025-03-05', FALSE, 14.50, NULL),
(8, 'B008-C001', 'A08-01', '2025-03-10', FALSE, 15.90, NULL),
(9, 'B009-C001', 'A09-01', '2025-03-15', FALSE, 17.50, NULL),
(10, 'B010-C001', 'A10-01', '2025-03-20', FALSE, 13.90, NULL);

-- Inserimento dei prestiti.
-- reader_id identifica chi prende il libro; inventory_id identifica quale copia viene prestata.
-- actual_return_date puo' essere NULL quando il libro non e' ancora stato restituito.
INSERT INTO Loans(
    reader_id,
    inventory_id,
    operation_date,
    withdrawal_date,
    return_date,
    actual_return_date
)
VALUES
(1, 1, '2026-01-10', '2026-01-11', '2026-02-10', '2026-02-08'),
(1, 2, '2026-01-15', '2026-01-15', '2026-02-14', '2026-02-14'),
(3, 3, '2026-02-01', '2026-02-02', '2026-03-04', '2026-03-10'),
(4, 4, '2026-02-10', '2026-02-12', '2026-03-14', '2026-03-01'),
(4, 5, '2026-03-01', '2026-03-01', '2026-03-31', NULL),
(6, 6, '2026-03-15', '2026-03-16', '2026-04-15', '2026-04-11'),
(7, 7, '2026-04-02', '2026-04-02', '2026-05-02', NULL),
(12, 8, '2026-05-01', '2026-05-01', '2026-05-31', NULL),
(10, 9, '2026-05-12', '2026-05-13', '2026-06-12', NULL);
