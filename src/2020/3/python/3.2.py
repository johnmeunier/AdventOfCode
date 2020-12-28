with open("src/2020/3/inputs.txt", "r") as f:
    inputs = list(f.read().splitlines())
    slopes = [
        (1, 1),
        (3, 1),
        (5, 1),
        (7, 1),
        (1, 2)
    ]
    width = len(inputs[0])
    answer = 1
    for slopeX, slopeY in slopes:
        counterY = 0
        counter = 0
        for line in inputs:
            if line[(counterY * slopeX) % width] == "#":
                counter += 1
            counterY += 1
        answer *= counter
    print(answer)
