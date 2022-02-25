// String'e çevirmek
let x = 5 + ""
console.log(typeof x)

let s = String(7)
console.log(typeof s)
s = String(7.2)
console.log(s)
s = String(true)
console.log(s)


// Number'a çevirmek
let n = Number("23")
console.log(n)
console.log(typeof n)

n = Number(true)
console.log(n)
n = Number(false)
console.log(n)
n = Number("7.2")
console.log(n)
n = Number("str") // çeviremezse NaN olarak döndürür. JS'in exception fırlatmama eğilimi vardır
console.log(n)

n = Number(null)
console.log(n)
n = Number(undefined)
console.log(n)


// Boolean
let b = Boolean(1)
console.log(b)
b = Boolean(0)
console.log(b)
b = Boolean("hi")
console.log(b)
b = Boolean("")
console.log(b)
b = Boolean(23)
console.log(b)
b = Boolean(-23)
console.log(b)










