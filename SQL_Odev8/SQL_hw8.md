# Sorular

1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

## Çözümler

1. 
```sql
CREATE TABLE employee 
(
	id INTEGER PRIMARY KEY,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```
2.
```sql
insert into employee (id, name, birthday, email) values (1, 'Reinhold Gritsaev', '1979-08-04', 'rgritsaev0@quantcast.com');
insert into employee (id, name, birthday, email) values (2, 'Salome Goschalk', '2021-08-27', 'sgoschalk1@about.com');
insert into employee (id, name, birthday, email) values (3, 'Dun Walwood', '1900-10-27', 'dwalwood2@jugem.jp');
insert into employee (id, name, birthday, email) values (4, 'Barr Doret', '2010-04-22', 'bdoret3@wikia.com');
insert into employee (id, name, birthday, email) values (5, 'Gerhardt Muirden', '2015-09-10', 'gmuirden4@gnu.org');
insert into employee (id, name, birthday, email) values (6, 'Andros Maroney', '2019-12-13', 'amaroney5@epa.gov');
insert into employee (id, name, birthday, email) values (7, 'Kenny Dulton', '1947-01-01', 'kdulton6@usnews.com');
insert into employee (id, name, birthday, email) values (8, 'Ellynn O''Hartigan', '1976-12-07', 'eohartigan7@flickr.com');
insert into employee (id, name, birthday, email) values (9, 'Freeland Jaggard', '1990-01-08', 'fjaggard8@hubpages.com');
insert into employee (id, name, birthday, email) values (10, 'Adelaide Pennycook', '1999-12-25', 'apennycook9@businessweek.com');
insert into employee (id, name, birthday, email) values (11, 'Sophia Guillain', '1973-10-24', 'sguillaina@cnn.com');
insert into employee (id, name, birthday, email) values (12, 'Micheil Clow', '1961-04-11', 'mclowb@reverbnation.com');
insert into employee (id, name, birthday, email) values (13, 'Devan Dewfall', '1961-12-23', 'ddewfallc@noaa.gov');
insert into employee (id, name, birthday, email) values (14, 'Reeta Pollicote', '1905-01-07', 'rpollicoted@1und1.de');
insert into employee (id, name, birthday, email) values (15, 'Filbert Prujean', '1970-01-07', 'fprujeane@sun.com');
insert into employee (id, name, birthday, email) values (16, 'Maurie Foulgham', '1924-10-08', 'mfoulghamf@photobucket.com');
insert into employee (id, name, birthday, email) values (17, 'Sheelah Korneev', '1931-06-10', 'skorneevg@nih.gov');
insert into employee (id, name, birthday, email) values (18, 'Charlotta Gillford', '1923-04-04', 'cgillfordh@yolasite.com');
insert into employee (id, name, birthday, email) values (19, 'Brook Frome', '1939-08-06', 'bfromei@w3.org');
insert into employee (id, name, birthday, email) values (20, 'Daphne Thurber', '1975-07-22', 'dthurberj@unc.edu');
insert into employee (id, name, birthday, email) values (21, 'Liv Hulme', '1909-04-19', 'lhulmek@homestead.com');
insert into employee (id, name, birthday, email) values (22, 'Brennan Daintrey', '1960-03-15', 'bdaintreyl@blogs.com');
insert into employee (id, name, birthday, email) values (23, 'Dela Dran', '1987-03-17', 'ddranm@cargocollective.com');
insert into employee (id, name, birthday, email) values (24, 'Roselle Mokes', '1961-07-28', 'rmokesn@salon.com');
insert into employee (id, name, birthday, email) values (25, 'Rogers Hyams', '1917-10-21', 'rhyamso@imdb.com');
insert into employee (id, name, birthday, email) values (26, 'Aurelia Luis', '1956-09-21', 'aluisp@example.com');
insert into employee (id, name, birthday, email) values (27, 'Gizela Waddup', '2018-09-13', 'gwaddupq@europa.eu');
insert into employee (id, name, birthday, email) values (28, 'Raven Antoniades', '1926-02-01', 'rantoniadesr@people.com.cn');
insert into employee (id, name, birthday, email) values (29, 'Andriana Leverette', '2012-08-04', 'aleverettes@imgur.com');
insert into employee (id, name, birthday, email) values (30, 'Nissie Turbern', '2011-03-19', 'nturbernt@cbsnews.com');
insert into employee (id, name, birthday, email) values (31, 'Ervin Milliere', '2013-06-20', 'emilliereu@cloudflare.com');
insert into employee (id, name, birthday, email) values (32, 'Fernandina Edmans', '1932-10-28', 'fedmansv@tiny.cc');
insert into employee (id, name, birthday, email) values (33, 'Wylie Karoly', '2004-09-25', 'wkarolyw@yandex.ru');
insert into employee (id, name, birthday, email) values (34, 'Earl Diamond', '1928-08-05', 'ediamondx@webeden.co.uk');
insert into employee (id, name, birthday, email) values (35, 'Raffarty Edmonds', '1940-09-05', 'redmondsy@gmpg.org');
insert into employee (id, name, birthday, email) values (36, 'Zelig Whiskerd', '1929-05-07', 'zwhiskerdz@addtoany.com');
insert into employee (id, name, birthday, email) values (37, 'Vicky Pinilla', '1977-09-20', 'vpinilla10@hud.gov');
insert into employee (id, name, birthday, email) values (38, 'Fowler Codeman', '1904-10-06', 'fcodeman11@si.edu');
insert into employee (id, name, birthday, email) values (39, 'Chester Stitson', '1919-09-04', 'cstitson12@myspace.com');
insert into employee (id, name, birthday, email) values (40, 'Gerianna Trangmar', '1986-09-16', 'gtrangmar13@noaa.gov');
insert into employee (id, name, birthday, email) values (41, 'Hugh Fulkes', '2007-08-28', 'hfulkes14@jigsy.com');
insert into employee (id, name, birthday, email) values (42, 'Eziechiele Dwelley', '1919-05-26', 'edwelley15@chronoengine.com');
insert into employee (id, name, birthday, email) values (43, 'Giraud Le Noire', '2017-06-30', 'gle16@vk.com');
insert into employee (id, name, birthday, email) values (44, 'Duky Bentjens', '1968-01-11', 'dbentjens17@independent.co.uk');
insert into employee (id, name, birthday, email) values (45, 'Guthrie Mitskevich', '2002-04-21', 'gmitskevich18@hud.gov');
insert into employee (id, name, birthday, email) values (46, 'Terrel Paulillo', '1958-05-22', 'tpaulillo19@angelfire.com');
insert into employee (id, name, birthday, email) values (47, 'Avrom Aldersey', '1946-12-02', 'aaldersey1a@telegraph.co.uk');
insert into employee (id, name, birthday, email) values (48, 'Leandra Foulkes', '1912-07-24', 'lfoulkes1b@shinystat.com');
insert into employee (id, name, birthday, email) values (49, 'Jermaine Ocheltree', '1901-08-12', 'jocheltree1c@meetup.com');
insert into employee (id, name, birthday, email) values (50, 'Montgomery Issacson', '1995-04-08', 'missacson1d@technorati.com');
```

3. 
```sql
UPDATE employee
SET name = 'XXXX YYYY',
	birthday = '2020-01-01'
WHERE name LIKE '%d';

UPDATE employee
SET id =51
WHERE id=50;

UPDATE employee
SET name='British'
WHERE email LIKE '%.uk';

UPDATE employee
SET name='Millenium Generation'
WHERE birthday = '2020-01-01';
```

4. 
```sql
DELETE FROM employee
WHERE id=51;

DELETE FROM employee
WHERE name = 'Millenium Generation'
RETURNING *;

DELETE FROM employee
WHERE email LIKE '%.uk'
RETURNING *;

DELETE FROM employee
WHERE id > 20;

DELETE FROM employee
WHERE id % 2 =1;
```