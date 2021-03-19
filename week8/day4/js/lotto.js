const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const push = (arr, value) => {
    arr[arr.length] = value;
    return arr;
}

const indexOf = (arr, search) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }

    return -1;
}

const turn = () => {
    const max = 90;
    let rand = random(1, max);

    if (indexOf(out, rand) === -1) {
        return push(out, rand);
    }

    if (out.length === max) {
        return out;
    }

    return turn();
}

const getIntervalIndex = (num) => {
    if (num >= 1 && num <= 9) {
        return 0;
    }

    if (num === 90) {
        return 8;
    }

    for (let i = 9; i <= 79; i += 10) {
        if (num >= i + 1 && num <= i + 10) {
            return (i + 1) / 10;
        }
    }
}


const getCard = () => {
    const rowEmpty = [];
    let row = [];
    const card = [];
    const repeated = []; // hansı index-də neçə dəfə rəqəm çıxıb
    const out = [];

    for (let i = 0; i < 9; i++) {
        push(rowEmpty, '');
        push(repeated, 0); // [0,0,0,0,0,0,0,0]
    }

    for (let j = 0; j < 3; j++) {
        row = [...rowEmpty]; // ['','','','','','','','']

        for (let i = 0; i < 5; i++) {
            const rand = random(1, 90);
            const numIndex = getIntervalIndex(rand); // meselen, 32 - 2-ci, 55 - 4-cu, 90 - 8-ci index

            // əgər çıxan daşın index-ində rəqəm varsa
            // və ya çıxan daşın index-ində 2 və daha çox təkrarlanma varsa
            // və ya (2-ci və yuxarı cərgədəyəmsə və index-də təkrar olunmayan rəqəm varsa və çıxan rəqəm təkrarlanmamış index-də deyilsə)
            // YENIDƏN TƏZƏ RƏQƏM ÇIXART
            if (typeof row[numIndex] === 'number' || repeated[numIndex] >= 2 ||
                (indexOf(out, rand) >= 0) ||
                (j > 0 && indexOf(repeated, 0) !== -1 && indexOf(repeated, 0) !== numIndex)) {
                i--;
                continue;
            }

            row[numIndex] = rand;
            repeated[numIndex]++;
            push(out, rand);
        }

        push(card, row);
    }

    return card;
}


const checkCardNumber = (num, cards = []) => {
    const numIndex = getIntervalIndex(num);
    for (let i = 0; i < cards.length; i++) {
        if (num === cards[i][numIndex]) {
            cards[i][numIndex] = 'X';
            //return cards;
            console.log(`${num} ${i+1}-ci sirada tapildi`);
        }
    }

    return cards;
}