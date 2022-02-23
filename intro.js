// Variables

// Declaration
let x, y, z
let i

// Assignment
x = 3
y = 4

// Single line
let x2 = -2

// Literal: kendi başlarına var olan ham datalardır. Değişkenlere atanır, fonksiyonlara arguman olarak gönderilir
// 1 -> int literal
// "js" -> string literal
// false, true -> boolean literals
// 1.2 -> double literal


// Optional Semicolon
// non-poblematic multi line
x = 3
y = 4

// Problematic multi line
let a
=
    3
console.log(a)

y = 3
z = 4
a = 2
b = 9
x = y + z;
(a+b).toString();


// var vs let
if(true){
    var g = 99;
}
console.log(g)

// if(true){
//     let p = 99;
// }
// console.log(p)


// const vs let
const pi = 3.14, e = 2.71
x2 = 4
const y2 = -2
x2 = y2 * 3

// Kuvvet alma
console.log(3 ** 3)


// Comparison with ==  (Don't do that). Burada değişkenlerin tipi kontrol edilmez, sadece tuttuğu değerler kontrol edilir
console.log(0 == false)
console.log(1 == true)
console.log("abc" == true)
console.log("" == true)
console.log("" == false)

// Comparison with === (Do that). Burada değişkenlerin hem tipi hem de tuttuğu değerler kontrol edilir
console.log(0 === false)
console.log(0 === 1)

// git branch test

