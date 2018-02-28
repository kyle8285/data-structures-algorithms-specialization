# Uses python3
import sys

def huge_fibonacci(n,m):
    fib1_mod_m = 0 % m
    fib2_mod_m = 1 % m
    remainders = [0,1]

    while len(remainders) >= 0:
        fib1_mod_m, fib2_mod_m = fib2_mod_m, ((fib1_mod_m + fib2_mod_m) % m)
        remainders.append(fib2_mod_m)

        if fib1_mod_m == 0 and fib2_mod_m == 1:
            remainders.pop()
            remainders.pop()
            break

    period_len = len(remainders)
    new_fib = n % period_len
    return remainders[new_fib]


if __name__ == '__main__':
    input = sys.stdin.readline()
    a, b = map(int, input.split())
    print(huge_fibonacci(a, b))

