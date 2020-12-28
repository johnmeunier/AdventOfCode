with open("src/2020/2/inputs.txt", "r") as f:
    inputs = list(f.read().splitlines())
    counter = 0
    for occur in inputs:
        splitted = occur.split(" ")
        minimum = int(splitted[0].split("-")[0])
        maximum = int(splitted[0].split("-")[1])
        letter = splitted[1][0]
        chain = splitted[2]
        occur = len(chain.split(letter)) - 1
        if occur >= minimum and occur <= maximum:
            counter += 1
    print(counter)
