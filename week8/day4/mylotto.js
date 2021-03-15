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

let out = [];
const turn = () => {

    const max = 5;
    let rand = random(1, max);

    if (indexOf(out, rand) === -1) {
        return push(out, rand);
    }

    if (out.length === max) {
        return out;
    }

    return turn();
}

console.log(turn())

const getIntervalIndex = (num) => {
    if (num < 10) {
        return 0;
    }
    for (let i = 9; i < 79; i += 10) {
        if (num > i && num <= i + 10) {
            return (i + 1) / 10;
        }
    }
    if (vum = 90) {
        return 8;
    }
}

console.log(getIntervalIndex(48));

const generateCard = () => {
    let row = [];
    const card = [];
    const repeated = [];
    const emptyRow = [];

    for (let i = 0; i < 9; i++) {
        push(emptyRow, '');
        push(repeated, 0);
    }

    for (let j = 0; j < 3; j++) {
        row = [...emptyRow];

        for (let i = 0; i < 5; i++) {
            const rand = random(1, 90);
            const numIndex = getIntervalIndex(rand);
            if (typeof row[numIndex] === 'number' || repeated[numIndex] >= 2 ||
                (j > 0 && indexOf(repeated, 0) !== -1 && indexOf(repeated, 0) !== numIndex)) {
                i--;
                continue;
            }

            row[numIndex] = rand;
            repeated[numIndex]++;
        }

        push(card, row);
    }

    console.log(repeated);

    return card;
}