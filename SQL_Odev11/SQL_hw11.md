# Sorular

1. actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
2. actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
3. actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
4. İlk 3 sorguyu tekrar eden veriler için de yapalım.

## Çözümler

1. 
```sql
(SELECT first_name FROM actor
ORDER BY first_name ASC)
UNION
(SELECT first_name FROM customer
ORDER BY first_name ASC);
```
2. 
```sql
(SELECT first_name FROM actor
ORDER BY first_name ASC)
INTERSECT
(SELECT first_name FROM customer
ORDER BY first_name ASC);
```
3. 
```sql
(SELECT first_name FROM actor
ORDER BY first_name ASC)
EXCEPT
(SELECT first_name FROM customer
ORDER BY first_name ASC);
```
4.
```sql
(SELECT first_name FROM actor
ORDER BY first_name ASC)
UNION ALL
(SELECT first_name FROM customer
ORDER BY first_name ASC);
```
