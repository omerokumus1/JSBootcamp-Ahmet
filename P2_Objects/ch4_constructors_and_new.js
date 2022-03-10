{// Constructor function
    function Person(name, age){
        // this = {} // kendiliğinden yapılır
        this.name = name;
        this.age = age;
        // return this; // kendiliğinden yapılır
    }
    let p = new Person("Ömer", "25")
    console.log(p.name);
    console.log(p.age);

    /* Steps
        1. Boş bir obje oluşturulur ve this kelimesine bağlanır (arka planda yapılır)
        2. Fonksiyon body'si çağırılır. Burada this ile o objeye erişilip onun üzerinde değişiklikler yapılabilir ( this.name = name; gibi)
        3. oluşturulan obje return edilir. (arka planda yapılır)
     */

    function car(){
        console.log(this + " is created");
    }
    let c = new car(); // herhangi bir fonksiyon da new ile çağırılabilir. Bundan sebep constructor fonk. baş harfi büyük yazılır.


    // Bir fonksiyonu class gibi kullanmak
    function Animal(name, age, makeSound, introduce){
        this.name = name
        this.age = age
        this.makeSound = makeSound
        this.introduce = introduce
        this.eat = () => console.log("yummy!")
        this.sleep = function () {
            console.log("Zzzz...")
        }
    }

    let cat = new Animal("puffy", 2,
        () => console.log("Meow!"),
        function () {
            console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.")
        })

    cat.eat()
    cat.sleep()
    cat.makeSound()
    cat.introduce()

    // makeSound ve introduce birer property'dir. fonksiyon verirsen fonksiyon, obje verirsen obje, primitive verirsen primitive tutar.
    cat.makeSound = "meow"
    console.log("cat.makeSound: " + cat.makeSound)
}

{ // constructor with a return
    /*  Return kuralları
        1. Obje döndürürsen, this objesini değil yazdığın objeyi döndürür
        2. primitive döndürürsen ignore eder

     */

    // 1. Obje döndürmek
    function Person(name, age){
        this.name = name;
        this.age = age;
        return {name: "James"}
    }

    let p = new Person("Joe", 2); // {name: "James"} objesini döndürür
    console.log(p)


    // 2. primitive döndürmek
    function Animal(name){
        this.name= name;
        return 5
    }

    let a = new Animal("puffy"); // this objesini döndürür
    console.log(a)
}