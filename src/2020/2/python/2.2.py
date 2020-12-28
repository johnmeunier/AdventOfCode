
with open("src/2020/2/inputs.txt", "r") as f:
    inputs = list(f.read().splitlines())
    counter = 0
    for occur in inputs:
        splitted = occur.split(" ")
        pos1 = int(splitted[0].split("-")[0])
        pos2 = int(splitted[0].split("-")[1])
        letter = splitted[1][0]
        chain = splitted[2]
        occur = len(chain.split(letter)) - 1
        if (chain[pos1 - 1] == letter) ^ (chain[pos2 - 1] == letter):
            counter += 1

    print(counter)
