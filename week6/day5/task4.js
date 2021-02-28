// Size mueyyen bir aralig verilir o araligda sade ededleri console-a cixaran proqram
//     yazin
//     Example: Başlanğıc deyer - 1,Bitis deyeri - 50 
//     1 ile 50 arasindaki sade ededler: 2,3,5,7,11,13,...,47 
//     Bu sekilde olmalidir

let s = "";
let n;
const start = 1;
const end = 50;
    for (let i = start; i <= end; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (i > 1 && isPrime) {
            s += i + ' ';
        }
    }
    console.log(s);