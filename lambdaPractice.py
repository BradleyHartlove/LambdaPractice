def zero(x):
    return 0

def succ(x):
    return x + 1

def proj(total, elem, list):
    return list[elem - 1]

def f(i):
    return i + 4 

def g(i):
    return i + 1

def composition(f, g, x):
    return f(g(x))

x = True
y = False

def recursiveFunc(n):
    if(n == 0):
        return 1
    else:
        return n * recursiveFunc(n - 1)

def add(x, y):
    return x + y

def square(x):
    return x * x

def isZero(x, y):
    if(x == 0 and y == 0):
        return True
    return False

def notAnd(x, y):
    if(not x and not y):
        return True
    return False

x = False
y = False

print(notAnd(x, y))





