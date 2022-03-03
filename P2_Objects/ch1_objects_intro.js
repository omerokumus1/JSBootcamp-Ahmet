{
    // 1- Empty object creation
    let u1 = {}; // {} -> object literal
    let u2 = new Object();



    // 2- Object with properties and without a class declaration
    let o1 = {
        name: "Ahmet",
        surname: "Kaplan",
        age: 25, // comma is optional
    }
    // property'ler belirtilmesine bakılmazsın stringe çevrilip tutulur



    // 3- Accessing properties
    console.log("name: " + o1.name)
    console.log("surname: " + o1.surname)
    console.log("age: " + o1.age)



    // 4- Adding properties to an object
    o1.school = "Georgia"
    console.log("School: " + o1.school)
    console.log(o1)

    // 5- Deleting a property
    delete o1.school
    console.log(o1)



    // 6- Adding a key as string: use [] instead of dot (.)
    o1["Hometown"] = "Maraş"
    console.log(o1)

    o1["City of living"] = "Atlanta"
    console.log("City of living: " + o1["City of living"])
    console.log(o1)

    o1.cityOfLiving = "Atlanta"
    console.log(o1)

    let key = "City of living"
    console.log("City of living: " + o1[key]) // [] ile erişmek daha güvenlidir. Çünkü objenin içinde birden çok kelimeden oluşan bir key bulunabilir.
    // nokta ile yapılamaz
    // ** köşeli parantezi kullanmayı tercih et



    // 7- Property existence test: in operatoru
    console.log("does name exist? " + ("name" in o1)) // kontrolü yapılacak key string olarak verilir. string olarak verilmezse değişkenmiş gibi kontrol edilir

    console.log(o1.city) // olmayan property'ler undefined olarak karşımıza çıkar
    if (o1.city === undefined)
        console.log("city property does not exist1")
    if (!("city of living" in o1)) // birden fazla kelime içeren keyler için nokta ile kontrol yapılamaz
        console.log("city property does not exist2")

    // ** in operatörünü kullanmayı tercih et



    // 8- Walking over an object (iterate through)
    for (const key in o1) {
        console.log("key: " + key + ", value: " + o1[key])
    }

}