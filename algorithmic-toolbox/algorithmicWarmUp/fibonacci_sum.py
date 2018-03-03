# Uses python3
import sys

def fibonacci_sum(n):
    fib1_mod_10 = 0 % 10
    fib2_mod_10 = 1 % 10
    totals = [0,1]
    while len(totals) >= 0:
        fib1_mod_10, fib2_mod_10 = fib2_mod_10, ((fib1_mod_10 + fib2_mod_10) % 10)
        totals.append(fib2_mod_10)

        if fib1_mod_10 == 0 and fib2_mod_10 == 1:
            totals.pop()
            totals.pop()
            break

    return (sum(totals) * (n // len(totals)) + sum(totals[0:(n%len(totals)+1)])) % 10

if __name__ == '__main__':
    input = sys.stdin.readline()
    a = int(input)
    print(fibonacci_sum(a))
