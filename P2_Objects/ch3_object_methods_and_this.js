{ // adding methods to objects
    let o1 = {
        name: "John",
        age: 30
    }

    // 1- by function expressions
    o1.introduce = function () {
        return "Hi, my name is " + o1.name + " and I'm " + o1.age + " years old.1";
    };
    console.log(o1.introduce())


    // 2- by function declaration
    function introduce(){
        return "Hi, my name is " + o1.name + " and I'm " + o1.age + " years old.2";
    }
    o1.introduce2 = introduce();
    console.log(o1.introduce2)


    // Preferred approach
    o1 = {
        name: "John",
        age: 30,
        introduce: function () {
            return "Hi, my name is " + o1.name + " and I'm " + o1.age + " years old.3"; // o1 ile erişim yapma, this kullan
        }
    }
    console.log(o1.introduce())

}


{// this keyword
    o1 = {
        name: "John",
        age: 30,
        introduce: function () {
            return "Hi, my name is " + this.name + " and I'm " + this.age + " years old.4";
        }
    }

}

{// this keyword is not bound
    function f1(){
        console.log(this.age)
    }

    f1()

    let o1 = {name: "Joe"}
    let o2 = {name: "James"}

    function sayHi(){
        console.log(this.name) // this kelimesi herhangi bir şeye bağlı değildir
    }

    o1.f = sayHi; // this kelimesi o1'e bağlanır
    o2.f = sayHi; // this kelimesi o2'e bağlanır

    o1.f() // o1'in name'sini yazdırır
    o2.f() // o2'nin name'sini yazdırır
}

{ // Arrow functions and this keyword
    // Arrow functions dont have this keyword

    let af = () => console.log(this.name)
    let o1 = {name: "Joe"}
    let o2 = {name: "James"}

    o1.f = af;
    o2.f = af;

    o1.f()
    o2.f()

    o1 = {
        name: "Joe",
        f1: function () {
            let x = 3;
            let af = () => console.log(this.name + x) // this kelimesi function kelimesi ile tanımlanan fonksiyona aittir
            af()
        },
        f2: () => console.log(this.name)
    }
    o1.f1()
    o1.f2()




}