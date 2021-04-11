// const message = document.querySelector('.message');
// const score = document.querySelector('.score');
// const buttons = document.querySelectorAll('button');
// const winnerScores = [0, 0];

// //add event listeners to buttons
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', playGame);
// }

// function playGame(e) {
//     //player's selection
//     let playerSelection = e.target.innerText;

//     // computer's selection
//     let computerSelection = Math.random() * 10;

//     if (computerSelection < 3) {
//         computerSelection = 'Rock';
//     } else if (computerSelection <= 7) {
//         computerSelection = 'Paper';
//     } else {
//         computerSelection = 'Scissors';
//     }

//     // compare winners
//     let result = checkWinner(playerSelection, computerSelection);

//     if (result === 'Player') {
//         result += ' wins!';
//         winnerScores[0]++;
//     }

//     if (result === 'Computer') {
//         result += ' wins!';
//         winnerScores[1]++;
//     }

//     if (result === 'Draw') {
//         result += '. It\'s a tie!'
//     }

//     score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

//     messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
// }

// function messenger(selectionMessage) {
//     message.innerHTML = selectionMessage;
// }

// function checkWinner(player, computer) {
//     if (player === computer) {
//         return 'Draw';
//     }

//     if (player === 'Rock') {
//         if (computer === 'Paper') {
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }

//     if (player === 'Paper') {
//         if (computer === 'Scissors') {
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }

//     if (player === 'Scissors') {
//         if (computer === 'Rock') {
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }
// }

//----------------version2----------------
const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getResultText = (me, comp) => {
    if (me === comp) {
        return 'Tie!';
    } else if (
        (me === 'rock' && comp === 'scissors') ||
        (me === 'paper' && comp === 'rock') ||
        (me === 'scissors' && comp === 'paper')
    ) {
        return 'You Win!';
    }

    return 'You Lose!';
}

const me = document.querySelector('#me');
const comp = document.querySelector('#comp');
const text = document.querySelector('#text');

const images = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
};

const elements = [];
for (index in images) {
    elements.push(index);
}


addEvent('.button', 'click', e => {
    me.src = 'img/right_fist.png';
    comp.src = 'img/left_fist.png';

    me.classList.add('shake');
    comp.classList.add('shake');

    //console.log(e.target.getAttribute('id'));
    const choiceMy = e.target.id;
    const choiceComp = elements[random(0, 2)];

    let resultText = getResultText(choiceMy, choiceComp);

    let countDown = 3;
    text.innerText = countDown;

    const timer = setInterval(() => {
        text.innerText = --countDown;

        if (countDown === 0) {
            text.innerText = 'Shoot';

            setTimeout(() => text.innerText = resultText, 500);

            clearInterval(timer);

            me.src = 'img/' + images[choiceMy] + '.png';
            comp.src = 'img/' + images[choiceComp] + '.png';

            me.classList.remove('shake');
            comp.classList.remove('shake');
        }
    }, 800);
});