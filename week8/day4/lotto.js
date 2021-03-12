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

    for (let i = 0; i < 9; i++) {
        push(rowEmpty, '');
    }

    for (let j = 0; j < 3; j++) {
        row = [...rowEmpty];

        for (let i = 0; i < 5; i++) {
            const rand = random(1, 90);
            if (typeof row[getIntervalIndex(rand)] === 'number') {
                i--;
                continue;
            }
            row[getIntervalIndex(rand)] = rand;
        }

        push(card, row);
    }

    return card;
}