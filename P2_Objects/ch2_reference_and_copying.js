let o1 = {name: "James"};
let o2 = o1 // reference copy

o2.name = "Peter"
console.log(o1.name)

{// comparison

// 1- referans kontrolü

    let a = {};
    let b = {};
    console.log(a === b) // ikisi aynı objeyi göstermiyor

// 2- içerik kontrolü

    a = {name: "John", age: 35, city: "New York"};
    b = {name: "John", age: 35, city: "New York"};

    let equal;
    for (const aKey in a) {
        equal = false;
        for (const bKey in b) {
            if (aKey === bKey) { // key equality check
                if (a[aKey] === b[bKey]) { // value equality check
                    equal = true;
                    break;
                }
            }
        }
        if (!equal)
            break;
    }
    console.log("a and b are equal? " + equal)

}

{ // object clone
    // 1- manuel cloning
    let a = {name: "John", age: 35, city: "New York"};
    let b = {};
    for (const key in a) {
        b[key] = a[key];
    }
    console.log(b);
    b.name = "Peter";
    console.log(b);

    // 2- Clone by Object.assign
    let c = Object.assign({}, a)
    console.log(c)
    c.name = "Joe"
    console.log(c)

    let d = {}
    Object.assign(d, c)
    console.log(d)

    let e = {name: "Ömer", school: "Marmara"};
    let f = Object.assign(a,e); // farklı propertyler a objesine eklenir, aynı property'lerin değeri değişir
    console.log(f);


}


{ // nested cloning
    let o1 = {
        name: "Ömer",
        surname: "Okumuş",
        age: 25,
        school: {
            name: "Marmara University",
            department: "CSE",
            program: "Master"
        }
    }
    console.log(o1.school.name)

    // 2 katmanlı obje cloning
    let o2 = {}
    for (const key in o1) {
        if (typeof o1[key] === "object") {
            let obj = {};
            for (const key2 in o1[key]) {
                obj[key2] = o1[key][key2]
            }
            o2[key] = obj
        }
        else{
            o2[key] = o1[key]
        }
    }
    console.log(o1)
    console.log(o2)

    // HW: n katmanlı obje cloning
}


{// const objects
    // const o1 ile o1 değişkenin sahip olduğu değer değiştirilemez. Yani eğer bir objeyi gösteriyorsa başka objeyi gösteremez
    // ama gösterdiği obje üzerine değişiklik yapılabilir.

    const o1 = {name: "Ömer", school: "Marmara"};
    console.log(o1)
    // o1 = {} // hatalı satır, yapılamaz
    o1.name = "Fatih"; // yapılabilir
    console.log(o1)
}