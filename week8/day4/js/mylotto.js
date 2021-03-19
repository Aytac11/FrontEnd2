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

// console.log(turn())

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

const generateCard = () => {
    let row = [];
    const card = [];
    const repeated = [];
    const emptyRow = [];
    let randContainer = [];

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
                (j > 0 && indexOf(repeated, 0) !== -1 && indexOf(repeated, 0) !== numIndex) ||
                indexOf(randContainer, rand) !== -1) {
                i--;
                continue;
            }
            push(randContainer, rand);
            row[numIndex] = rand;
            repeated[numIndex]++;
        }

        push(card, row);
    }

    // console.log(repeated);

    return card;
}

const generateTicket = () => {
    let ticket = [];
    for (let i = 0; i < 2; i++) {
        push(ticket, generateCard());
    }
    return ticket;
}

// console.log(generateTicket());

// let card = generateCard();
// console.log(card);
let ticket = generateTicket();
console.log(ticket);
const remove = (ticket, turn) => {
    let character = "x";

    for (let x = 0; x < ticket.length; x++) {
        for (let i = 0; i < ticket[x].length; i++) {
            let count = 0;
            for (let j = 0; j < ticket[x][i].length; j++) {

                if (turn[turn.length - 1] === ticket[x][i][j] || turn[0] === ticket[x][i][j]) {
                    ticket[x][i][j] += `<span class = "overlay"></span>` //character;
                    console.log("find");
                }

                //if (ticket[x][i][j] == "x" || ticket[x][i][j] == "") {
                if (typeof ticket[x][i][j] === 'string') {
                    count++;
                }

                if (count === 9) {
                    if (ticket[x] === ticket[0]) {
                        console.log(`In first card ${i+1}th row is full`);
                    } else {
                        console.log(`In second card ${i+1}th row is full`);
                    }
                }
                if (count === 8) {
                    console.log("Only one step needed to win");
                }
            }

        }
    }
    return ticket;
}