{// Arrow functions intro
    /* Yapısı
            let funcName = (arguments) => jobToDo;
     */
    let add = (n1, n2) => n1 + n2; // jobToDo is n1+n2. Eğer jobToDo bir expr. ise direkt return eder, yani
    // bir değişkene atayabileceğin herhangi bir şeyi buraya yazarsan direkt return eder

    let add2 = (n1, n2) => {
        return n1 + n2;
    };

    console.log(add(10, 15))
    console.log(add2(10, 15))

    // arrow func. with one argument: parantez yok
    let double = n => 2 * n;
    console.log(double(11))

    // arrow func. with no arg.: boş parantez
    let displayError = () => console.log("error occured");
    displayError()

}

{// Multiline arrow functions
    let sumArr = arr => {
        let sum = 0;
        for (const e of arr) {
            sum += e;
        }
        return sum;
    };

    let arr = [1, 2, 3, 4, 5]
    console.log(sumArr(arr))

}