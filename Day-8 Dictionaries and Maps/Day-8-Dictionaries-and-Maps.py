n = int(input())
i = 0
book = dict()
while(i < n):
    name , number = input().split()
    book[name] = number
    i+=1
while True:
    try:
        query = input() 
    except:
        break
    val = book.get(query, 0)
    if val != 0:
        print(query + "=" + book[query])
    else:
        print("Not found")
