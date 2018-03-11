# Use python3
import sys

def different_summands(n):
    integers = []
    total = 0

    for i in range(1, n + 1):
        if total + i == n:
            total += i
            integers.append(i)
            break
        if total + i + (i + 1) <= n:
            total += i
            integers.append(i)

    return ('{}\n{}'.format(str(len(integers)), ' '.join(map(str, integers))))


if __name__ == '__main__':
    n = int(sys.stdin.readline())
    print(different_summands(n))
