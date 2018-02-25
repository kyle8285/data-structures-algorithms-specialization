# Uses python3
import sys

def gcd(a,b):
    if a % b == 0:
        return b;
    return gcd(b, a%b)

def lcm_naive(a, b):
    for l in range(1, a*b + 1):
        if l % a == 0 and l % b == 0:
            return l

    return a*b

def lcm_fast(a,b):
    return (a*b)//gcd(a,b)

if __name__ == '__main__':
    input = sys.stdin.readline()
    a, b = map(int, input.split())
    print(lcm_fast(a, b))
