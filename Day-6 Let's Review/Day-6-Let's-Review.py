# Enter your code here. Read input from STDIN. Print output to STDOUT


def solutions(strings):
    for i in strings:
        length=len(i)
        even=""
        odd=""
        for j in range(length):
            if j%2==0:
                even=even+i[j]
            elif j==0:
                even=even+i[j]
            else:
                odd=odd+i[j]
    print(even+" "+odd)
x=int(input())
strings=[]
for i in range(x):
    stringinput=input()
    strings.append(stringinput)
    solutions(strings)

