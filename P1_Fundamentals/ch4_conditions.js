// ternary operator (conditional operator) '?'

// Structure
// let t = (boolean-expression) ? true-expression : false-expression

let t = (2 > 3) ? "2 < 3" : "2 >= 3";
console.log(t)
if (2 > 3 )
    t = "2 < 3";
else
    t = "2 >= 3";

t = "abc".includes("a") ? Math.PI : Math.random();
console.log(t)

if (b1)
    f1()
else if (b2)
    f2()
else
    f3()

t = b1 ? f1() : ( b2 ? f2() : f3() )

if (b1)
    f1()
else
    f4()

t = b1 ? f1() : f4()

function f4(){
    return b2 ? f2() : f3()
}


let age = 4

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';