CREATE TABLE book(
    id INT PRIMARY KEY auto_increment,
    title VARCHAR(100),
    year VARCHAR(4),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author(id)
);

CREATE TABLE author(
    id INT PRIMARY KEY auto_increment,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    birthday DATE,
    country VARCHAR(50),
    is_dead BOOLEAN
);

INSERT INTO author(firstname, lastname, birthday, country, is_dead)
VALUES ("John", "Steinbeck", "1902-02-27", "USA", 1),
("Henry", "Miller", "1891-12-26", "USA", 1),
("Gertrude", "Stein", "1874-02-03", "USA", 1),
("Virginia", "Woolf", "1982-01-25", "England", 0),
("Michel", "Houellebecq", "1956-02-26", "France", 0),
("James", "Joyce", "1882-02-02", "Ireland", 1);

INSERT INTO book(title, year, author_id)
VALUES ("The Years", "1937", 4),
("The Waves", "1931", 4),
("East of Eden", "1952", 1),
("Cannery Row", "1945", 1),
("The Grapes of Wrath", "1939", 1),
("Tender Buttons", "1914", 3),
("Sexus", "1945", 2),
("Plexus", "1952", 2),
("La Carte et le Territoire", "2010", 5),
("Extension du domaine de la lutte", "1994", 5),
("Ulysse", "1920", 6);


