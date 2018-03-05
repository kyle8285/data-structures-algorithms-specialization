# Use python3
import sys

def max_dot_product(n, prices, clicks):
    total = 0
    prices.sort()
    clicks.sort()
    for i in range(n):
        total += prices[i] * clicks[i]
    return total

if __name__ == '__main__':
    n = int(sys.stdin.readline())
    prices = list(map(int, sys.stdin.readline().split(' ')))
    clicks = list(map(int, sys.stdin.readline().split(' ')))
    print(max_dot_product(n, prices, clicks))
