//Church Numerals
const n0 = f => a => a;
const n1 = f => a => f(a);
const n2 = f => a => f(f(a));
const n3 = f => a => f(f(f(a)));
const n4 = f => a => f(f(f(f(a))));
const n5 = f => a => f(f(f(f(f(a)))));
const n6 = f => a => f(f(f(f(f(f(a))))));
const n7 = f => a => f(f(f(f(f(f(f(a)))))));
const n8 = f => a => f(f(f(f(f(f(f(f(a))))))));
const n9 = f => a => f(f(f(f(f(f(f(f(f(a)))))))));
const n10 = f => a => f(f(f(f(f(f(f(f(f(f(a))))))))));

//Inspect Properties for clarity
n0.inspect = "0";

n1.inspect = "1";

n2.inspect = "2";

n3.inspect = "3";

n4.inspect = "4";

n5.inspect = "5";

n6.inspect = "6";

n7.inspect = "7";

n8.inspect = "8";

n9.inspect = "9";

n10.inspect = "10";



//Helper function from Gabriel Lebec's videos
const jsnum = n => n(x => x + 1)(0)


//Zero Function
console.log("Zero Function\n")
const zerofunc = n => n0;

console.log("Input: " + n3.inspect + " -> " + jsnum(zerofunc(n3)));
console.log("\n")

//Successor Function
console.log("Successor Function\n")
const succ = num => fn => x => fn(num(fn)(x))

console.log("Input: " + n0.inspect + " -> " + jsnum(succ(n0)))
console.log("\n")

//Booleans 
truefunc = a => b => a
falsefunc = a => b => b

//Pair
console.log("Pairs\n")
pair = a => b => s => s(a)(b)
p = pair(n0)(n3)
console.log(jsnum(p(falsefunc)))

//Projection Function
console.log("\nProjection Function\n")
const proj = total => select => pairs => pairs(falsefunc)(falsefunc)(truefunc)

examplePairs = pair(n0)(pair(n1)(pair(n2)(n3)))
console.log("Selecting Third of Fourth: " + jsnum(proj(4)(3)(examplePairs)))

console.log("\n")

//Addition Function
console.log("Addition Function\n")
const add = n => k => n(succ)(k)

console.log("Input: " + n1.inspect + " + " + n2.inspect + " -> " + jsnum(add(n1)(n2)))

console.log("\n")

//Adding Four Function
const addingFour = n => n4(succ)(n)

//Adding One Function
const addingOne = n => n1(succ)(n)

//Composition Function
console.log("Composition\n")
composition = f => g => x => f(g(x))

console.log(jsnum(composition(addingFour)(addingOne)(n5)))

//Creating Helper Definitions for our functions

//Nesting Pairs (0, 1, 2, 3)
j = pair(n0)(pair(n1)(pair(n2)(n3)))
console.log("\n\nNested Pairs\n")
console.log(jsnum(j(truefunc))) //n0
console.log(jsnum(j(falsefunc)(truefunc))) //n1
console.log(jsnum(j(falsefunc)(falsefunc)(truefunc))) //n2
console.log(jsnum(j(falsefunc)(falsefunc)(falsefunc))) //n3

//Recursion
//Y = 𝜆f(𝜆x.f(xx))(𝜆x.f(xx))
y = f => (x => x(x))(x => f(y => x(x)(y)))

//Multiplication
mult = f => g => x => f(g(x)) //Same as Compisition!

//Square Function
square = n => (f => g => x => f(g(x)))(n)(n)

console.log("\nSquare Function\n")
console.log(jsnum(square(n3)))

//And Function
and = x => y => x(y)(x)

console.log("\nAnd Function\n")
console.log(and(truefunc)(truefunc))
console.log(and(truefunc)(falsefunc))
console.log(and(falsefunc)(truefunc))
console.log(and(falsefunc)(falsefunc))

//Not Function
not = x => x(falsefunc)(truefunc)
console.log("\nNot Function\n")
console.log(not(falsefunc))
console.log(not(truefunc))

//Not And Function
notAnd = x => y => (a => b => a(b)(a))(not(x))(not(y))

console.log("\nNot And Function\n")

console.log(notAnd(truefunc)(truefunc))
console.log(notAnd(truefunc)(falsefunc))
console.log(notAnd(falsefunc)(truefunc))
console.log(notAnd(falsefunc)(falsefunc))

//isZero Function
isZero = n => n(truefunc(falsefunc))(truefunc)

//fst
fst = p => p(truefunc)

//snd
snd = p => p(falsefunc)

//phi
phi = p => pair(snd(p))(succ(snd(p)))

//Predecessor Function
pred = n => fst(n(phi)(pair(n0)(n0)))

//Facotrial Function
factorial = n => isZero(n)(n1)(mult(n)(pred(n)))

console.log("\nFactorial Function\n")

console.log(jsnum(factorial(n3)))
console.log(jsnum(factorial(n2)))