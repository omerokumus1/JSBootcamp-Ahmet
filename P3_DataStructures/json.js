{ // json methods
    // 1. stringify: object to JSON
    // 2. parse: string to object


    let person = {
        "name": "Ömer",
        "surname": "Okumuş",
        "age": 25,
        "school": {
            "name": "Marmara University",
            "department": "Computer Science",
            "programme": "Master",
        }
    };

    // 1. stringify
    let jsonVersion = JSON.stringify(person)
    console.log(jsonVersion)
    console.log(typeof jsonVersion)


    // 2. parse
    let str = "{\"name\":\"Ömer\",\"surname\":\"Okumuş\",\"age\":25,\"school\":{\"name\":\"Marmara University\",\"department\":\"Computer Science\",\"programme\":\"Master\"}}"
    let obj = JSON.parse(str)
    console.log(obj)
    console.log(typeof obj)

}