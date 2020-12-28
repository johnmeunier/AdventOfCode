with open("src/2020/3/inputs.txt", "r") as f:
    inputs = list(f.read().splitlines())
    width = len(inputs[0])
    perm = ["O" for i, line in enumerate(
        inputs) if inputs[i][(i * 3) % width] == "#"]
    print(len(perm))
