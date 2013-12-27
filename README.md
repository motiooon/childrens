DESCRIPTION
-----------

Rajesh Kuthrapali has a weird family structure. Every male member gives birth to a male child first and then a female child whereas every female member gives birth to a female child first and then to a male child. Rajesh analyses this pattern and wants to know what will be the Kth child in his Nth generation. Help him.

Note:

1.Every member has exactly 2 children.
2. The generation starts with a male member(Rajesh).
3. In the figure given below:

                                  M-------- 1st generation

                            /         \
                          M             F ------- 2nd generation
                       /    \         /   \
                      M     F       F     M
                                    |
                                 3rd child of 3rd generation

INPUT
-----

Read from standard input.
First line specifies T, the number of test cases.
Next T lines each gives 2 numbers, N and K

OUTPUT
------

Write from standard output.
Output 1 line for each test case giving the gender of the Kth child in in Nth generation.
Print “Male” for male “Female” for female (quotes only for clarification).

Constraints:

* 1<=T<=500
* 1<=N<=10000
* 1<=K<=min(10^15 , 2^(n-1))


EXAMPLE
-------

Input:
4
1 1
2 1
2 2
4 5

Output:
Male
Male
Female
Female


LIMITS:
-------

Time limit:     2s
Source limit:   4KB
Memory limit: 128MB
Deadline:     1:30h
