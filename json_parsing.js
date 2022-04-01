function dummyRequest(){ // api call
    return `[
    { 
        "name": "Ömer",
        "surname": "Okumuş",
        "age": 25,
        "school": {
            "name": "Marmara University",
            "department": "Computer Science",
            "programme": "Master"
        },
        "hobbies": ["Programming", "Sport", "Science"]
    },
    { 
        "name": "Ömer2",
        "surname": "Okumuş2",
        "age": 25,
        "school": {
            "name": "Marmara University2",
            "department": "Computer Science2",
            "programme": "Master2"
        },
        "hobbies": ["Programming2", "Sport2", "Science2"]
    }
    ]`
}

function dummyRequest2(){ // api call
    return `{ 
        "name": "Ömer",
        "surname": "Okumuş",
        "age": 25
    }`
}


function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

function Person(obj){
    this.name = obj.name;
    this.surname = obj.surname;
    this.age = obj.age;
    this.school = obj.school;
    this.hobbies = obj.hobbies;
}

{
    const response = dummyRequest2()
    const obj = JSON.parse(response);
    const person = new Person(obj.name, obj.surname, obj.age)
    console.log(person)
}

{
    const response = dummyRequest()
    const obj = JSON.parse(response)
    const p1 = new Person(obj[0])
    const p2 = new Person(obj[1])
    console.log("p1:")
    console.log(p1)
    console.log("p2:")
    console.log(p2)
}


