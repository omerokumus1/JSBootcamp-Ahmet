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


{// This keyword
    o1 = {
        name: "John",
        age: 30,
        introduce: function () {
            return "Hi, my name is " + this.name + " and I'm " + this.age + " years old.4";
        }
    }

}