**[7, 5, 1, 8, 3, 6, 0, 9, 4, 2]** dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

# Çözüm

1. root =7, 5 küçük olduğu için soluna geçer.
2. 1 root'un soluna geçer. 5'ten küçük olduğu için 5'in soluna geçer.
3. 8 root'un sağına geçer. 7'den büyük olduğu için 7'in sağına geçer.
4. 3 root'un soluna, 5'ten küçük olduğu için 5'in soluna, 1'den büyük olduğu için 1'in sağına geçer.
5. 6 root'un soluna, 5'ten büyük olduğu için 5'in sağına geçer.
6. 0 root'un soluna, 5'ten küçük olduğu için 5'in soluna, 1'den küçük olduğu için 1'in soluna geçer.
7. 9 root'un sağına geçer. 8'den büyük olduğu için 8'in sağına geçer.
8. 4 root'un soluna, 5'ten küçük olduğu için 5'in soluna, 1'den büyük olduğu için 1'in sağına, 3'ten büyük olduğu için 3'ün sağına geçer.
9. 2 root'un soluna, 5'ten küçük olduğu için 5'in soluna, 1'den büyük olduğu için 1'in sağına, 3'ten küçük olduğu için 3'ün soluna geçer.

Final Görüntü Aşağıdaki gibi olur.

```
        7
      /   \
     5     8
    / \     \
   1   6     9
  / \ 
 0   3
    / \
   2   4
```