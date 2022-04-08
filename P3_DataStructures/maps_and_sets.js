{ // Maps
    /*
        key-value ilişkisi ile veri saklar
     */

    // Map oluşturma
    let map = new Map();

    // set values
    let constants = { // bu sayede copy paste engeller, constant değerler tek bir yerden kontrol edilir
        "one": "one",
        "two": "two",
        "three": "three",
        "four": "four"
    }
    map.set(constants.one, 1)
    map.set(constants.two, 2)
    map.set(constants.three, 3)
    console.log(map)

    // get values
    let one = map.get("one")
    console.log("one: " + one)
    let four = map.get("four")
    console.log("four: " + four)

    // has check
    if (map.has("four"))
        console.log("four is available")
    else
        console.log("four is not available")

    // delete key-value pair
    map.delete(constants.three)
    console.log(map)

    // clear, size

    // keys
    let keys = map.keys()
    for (const key of keys) {
        console.log("key: " + key)
    }

    // values
    let values = map.values()
    for (const value of values) {
        console.log("value: " + value)
    }

    // foreach
    // sadece value ve key ile (map yok)
    map.forEach((v, k) => {
        console.log("value: " + v + ", key: " + k)
    })

    // sadece value ile
    map.forEach((v) => {
        console.log("value: " + v)
    })

    // Map from array
    map = new Map(
        [
            ["1", "banana"],
            ["2", "apple"],
            ["3", "orange"]
        ]
    )

    map.forEach((v, k )=> {
        console.log("value: " + v + ", key: " + k)
    })

}

{ // Sets
    /*
       - Matematiksel kümeleri temsil eder
       - Her değerden yalnızca 1 tane olur
     */

    // set initialization
    let set = new Set();

    // add values
    set.add(1)
    set.add(2)
    set.add(3)
    set.add(3) // duplicates are not added
    console.log(set)

    set.add([1,2,3])
    set.add([1,2,3]) // duplicate değildir, sadece aynı içeriğe sahip başka bir dizidir
    console.log(set)

    let arr = ['x', 'y', 'z']
    set.add(arr)
    set.add(arr) // duplicate, çünkü aynı diziyi bir kez daha eklemeye çalışıyoruz
    console.log(set)

    // keys() = values()
    for (const el of set.values()) {
        console.log(el)
    }
    for (const el of set.keys()) {
        console.log(el)
    }

    for (let entry of set.entries()) {
        console.log(entry)
    }

}