{ // Q8
    let number = "73167176531330624919225119674426574742355349194934\n" +
        "96983520312774506326239578318016984801869478851843\n" +
        "85861560789112949495459501737958331952853208805511\n" +
        "12540698747158523863050715693290963295227443043557\n" +
        "66896648950445244523161731856403098711121722383113\n" +
        "62229893423380308135336276614282806444486645238749\n" +
        "30358907296290491560440772390713810515859307960866\n" +
        "70172427121883998797908792274921901699720888093776\n" +
        "65727333001053367881220235421809751254540594752243\n" +
        "52584907711670556013604839586446706324415722155397\n" +
        "53697817977846174064955149290862569321978468622482\n" +
        "83972241375657056057490261407972968652414535100474\n" +
        "82166370484403199890008895243450658541227588666881\n" +
        "16427171479924442928230863465674813919123162824586\n" +
        "17866458359124566529476545682848912883142607690042\n" +
        "24219022671055626321111109370544217506941658960408\n" +
        "07198403850962455444362981230987879927244284909188\n" +
        "84580156166097919133875499200524063689912560717606\n" +
        "0588611646710940507754100225698315520005593572972599\n" +
        "9971636269561882670428252483600823257530420752963450"

    console.log(largestProduct2())

    // Ödev: largestProduct methodu 3 tane şey döndürsün: 1. kaçıncı indexten başladığı, 2. çarpılan sayılar, 3. çarpım sonucu
    // largestProduct 1 ve 2 aynı sonuçları üretmeli
    function largestProduct2() {
        let clearedNumber = clearData(number);
        let product;
        let max = -1;
        for (let i = 0; i < clearedNumber.length - 4; i++) {
            product = getProduct2(i, clearedNumber)
            if (product > max)
                max = product;

        }
        return max;
    }

    function getProduct2(from, str) {
        let product = 1;
        for (let i = from; i < from + 4; i++) {
            product *= str.charAt(i);
        }
        return product;
    }


    function clearData(number) {
        return number.replaceAll("\n", "")
    }

    function largestProduct1() {
        let max = -1;
        let product;
        for (let i = 0; i < number.length - 4; i++) {
            product = getProduct(i);
            if (product > max)
                max = product;
        }
        return max;
    }

    function getProduct(from) {
        let product = 1;
        let j = from;
        let multiplierCount = 0;
        while (multiplierCount !== 4) {
            if (number.charAt(j) !== "\n") {
                product *= number.charAt(j);
                multiplierCount++;
            }
            j++;
        }
        return product;
    }

}