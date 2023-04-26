# Sorular

1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
3. film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

## Çözümler

1.
```sql
SELECT title,length, (SELECT ROUND(AVG(length),3) FROM film) FROM film
WHERE length > 
(
SELECT AVG(length) FROM film
)
ORDER BY length;
```
2.
```sql
SELECT COUNT(*), (SELECT MAX(rental_rate) FROM film) FROM film
WHERE rental_rate = 
(
SELECT MAX(rental_rate) FROM film
);
```
3.
```sql
SELECT title,rental_rate,replacement_cost, (SELECT MIN(rental_rate) FROM film), (SELECT MIN(replacement_cost) FROM film) FROM film
WHERE rental_rate = 
(
SELECT MIN(rental_rate) FROM film
) AND replacement_cost = (
SELECT MIN(replacement_cost) FROM film
);
```
4.
```sql
SELECT customer_id, COUNT(*) FROM payment
GROUP BY customer_id
ORDER BY COUNT(*) DESC;
```
