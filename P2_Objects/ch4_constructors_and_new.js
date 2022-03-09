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

}