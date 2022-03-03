let str = "JS Bootcamp";
let i = 0;
let count = 0;
while (i < str.length){
    if (str.charAt(i) === 'o')
        count++;
    i++;
}

console.log(count)

for (let j = 0; j < str.length; j++) {
    if (str.charAt(i) === 'o')
        count++;
}
console.log(count)

// break, continue mevcut


// for of: index ile işlem yapmama gerek yoksa bu kullanılabilir
let arr = [11,21,31,41,51]
for (const num of arr) { // num her döngü başında elemanları sırayla tutar
    console.log(num)
}

// for in: her döngüde sırayla indexleri verir
for (const index in arr) {
    console.log("index: " + index + ", element: " + arr[index])
}

for (let j = 0; j < str.length; j++) {

}

