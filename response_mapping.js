class Response_mapping {
    getResponse() {
        return {
            "name": "Ömer",
            "surname": "Okumuş",
            "age": 25,
            "school": {
                "name": "Marmara University",
                "department": "Computer Science",
                "programme": "Master",
            }
        };
    }

    mapping() {
        let resp = this.getResponse(); // varsayalımki google'den response getiriyor
        let person = new Person(resp)
        console.log(person)
    }
}

// Model, response model,( mvc, mvp, mvvm)
class Person {
    constructor (response){
        this.name = response.name;
        this.surname = response.surname;
        this.age = response.age;
    }
}

(new Response_mapping()).mapping()
