// DOM - Document Object Model
// DOM- sayfanın içerisindeki HTML elemanlarını obje olarak temsil eder
document.body.style.background = "white";
let pElement = document.getElementById(1);
pElement.style.background = "green"
pElement.style.color = "white"


// BOM- Browser Object Model: Browser üzerindeki butonları vs kontrol etmeye yarayan yapı. Örn; favorilere ekleme, sayfayı yenileme, geçmiş, lokasyon vs

// DOM Tree:

const childrenOfBody = document.body.childNodes
console.log(childrenOfBody.length)
// alert(document.body.firstChild)
// alert(document.body.lastChild)
for (let i = 0; i < childrenOfBody.length; i++) {
    // console.log("child " + i + ":")
    // console.log(childrenOfBody[i])
}


// getElementBy methods
const pElements = document.getElementsByTagName("p")
console.log("pElements size: " + pElements.length)
for (let i = 0; i < pElements.length; i++) {
    console.log(i+1 + ":")
    console.log(pElements.item(i))
}

if (document.body.style.background === "black"){
    for (let i = 0; i <pElements.length; i++) {
        pElements.item(i).style.background = "grey"
        pElements.item(i).style.color = "wheat"
    }
}

const makeRedBtn = document.getElementById(3)
makeRedBtn.onclick = function() {
    document.body.style.background = "red"
    for (let i = 0; i <pElements.length; i++) {
        pElements.item(i).style.background = "grey"
        pElements.item(i).style.color = "wheat"
    }
}
