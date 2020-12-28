import time


with open("src/2020/1/inputs.txt", "r") as f:
    inputs = list(map(int, f.read().splitlines()))
    tic = time.perf_counter()

    for i in inputs:
        for j in inputs:
            if i + j == 2020:
                print(i * j)

    toc = time.perf_counter()
    print(f"Exec in: {(toc - tic)/1000} ms")
