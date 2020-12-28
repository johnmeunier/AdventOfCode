from itertools import combinations
import time

with open("src/2020/1/inputs.txt", "r") as f:
    inputs = list(map(int, f.read().splitlines()))
    tic = time.perf_counter()

    for x, y, z in combinations(inputs, 3):
        if x + y + z == 2020:
            print(x * y * z)
            break

    toc = time.perf_counter()
    print(f"Exec in: {toc - tic:0.4f}s")
