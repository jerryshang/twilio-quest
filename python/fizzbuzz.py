import sys

for arg in sys.argv[1:]:
    n = int(arg)
    if n % 15 == 0:
        print('fizzbuzz')
    elif n % 3 == 0:
        print('fizz')
    elif n % 5 == 0:
        print('buzz')
    else:
        print(n)
