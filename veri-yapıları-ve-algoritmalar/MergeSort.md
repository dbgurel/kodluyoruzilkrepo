**[16,21,11,8,12,22]** -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

# Çözüm

1. Ana dizi [16,21,11] ve [8,12,22] şeklinde ikiye bölünür.
2. [16,21,11] dizisi [16,21] ve [11] şeklinde ikiye bölünür. [8,12,22] dizisi [8,12] ve [22] şeklinde ikiye bölünür.
3. [16,21] dizisi [16] ve [21] şeklinde ikiye bölünür. [11] dizisi [11] şeklinde kalır. [8,12] dizisi [8] ve [12] şeklinde ikiye bölünür. [22] dizisi [22] şeklinde kalır.
4. [16] ve [21] dizileri karşılaştırılır ve [16,21] şeklinde birleştirilir. [11] dizisi [11] şeklinde kalır. [8] ve [12] dizileri karşılaştırılır ve [8,12] şeklinde birleştirilir. [22] dizisi [22] şeklinde kalır.
5. [16,21] ve [11] dizileri karşılaştırılır ve [11,16,21] şeklinde birleştirilir. [8,12] ve [22] dizileri karşılaştırılır ve [8,12,22] şeklinde birleştirilir.
6. [11,16,21] ve [8,12,22] dizileri karşılaştırılır ve [8,11,12,16,21,22] şeklinde birleştirilir.

* Big-O: O(nlogn)
