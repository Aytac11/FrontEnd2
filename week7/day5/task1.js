//Palindrome -> 121,131,141(Guzgu eksi ozune beraber ededlere palindrom ededler deyilir) Verilmis ededin polindrom eded olub olmadigini mueyyen eden proqram

const checkPalidrom = (num) => {
    num = num.toString();
    let len = num.length;
    for (let i = 0; i < len / 2; i++) {
        if (num[i] !== num[len - i - 1]) {
            return false;
        }
        return true;
    }

}

console.log(checkPalidrom(33));