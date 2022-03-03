{
    function add(n1, n2) {
        return n1 + n2;
    }

    console.log("1+5=" + add(1, 5))
    console.log("true+2=" + add(true, 2))
    console.log("ahmet+2=" + add("ahmet", 2))
    console.log("[1,2,3]+5= " + add([1, 2, 3], 5))

    function add2(n1, n2) {
        if (typeof n1 === "number" && typeof n2 === "number")
            return n1 + n2
        throw Error("parameters must be numbers")
    }


// local variables are the same as in Java


// Default values
    function greetings(name = "Anonymous") {
        console.log("Hello " + name);
    }

    greetings()
    greetings("Ahmet")

    function getStr() {
        return "Unknown";
    }

    function greetings2(name = getStr()) {
        console.log("Hello " + name);
    }

    greetings2()
    greetings2("Ömer")
    greetings2(22)

// Java default value simulation
// function add3(n1, n2){
//     return n1+n2
// }
//
// function add3(n1){
//     return add3(n1, 0)
// }
}


{// Function expressions
// arithmetic expression: 1 + 3 * 5 - 7 / 3
// boolean expression: 2 < 3 || 3 * pi > 6 && "araba".compareTo("bina") < 0
// func. exp. parametreye dayalı olduğundan yukarıdaki arith. bool. expr. gibi direkt olarak hesaplanamaz. Onun yerine tanımı değişkende tutulur.
    let f = function (n) { // f değişkeni bir fonksiyon objesine referans gösteriyor gibi düşünülebilir
        console.log("parameter is " + n)
    };
    f(4)

    let s = String("JS");
    s.big()

// function expr. başka bir fonk. parametre olarak gönderilebilir
    function printMessage(isTrue, errorFunc, successFunc) {
        if (isTrue)
            successFunc()
        else
            errorFunc()
    }

    function success() {
        console.log("successfull")
    }

    function error() {
        console.log("error occured")
    }

    let errorFunc = function () {
        console.log("error occured")
    };

    let successFunc = function () {
        console.log("successfull")
    };
    let t = true;
    printMessage(t, errorFunc, successFunc)
    printMessage(true, errorFunc, successFunc)

    printMessage(true,
        function () {
            console.log("error occured.")
        },
        function () {
            console.log("successful")
        })


    toUpper(String("JS")) // toUpper(new String("JS"))


    function toUpper(str) {

    }
    // clean str to arr
    // if (str.length > 100)
    //     sort(str, insertionSort)
    // else
    //     sort(str, bubbleSort)
    //
    // function sort(str, sortingAlg){
    //     // clean str to arr
    //     return sortingAlg(arr)
    // }

}










