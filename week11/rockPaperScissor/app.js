const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];

//add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
    //player's selection
    let playerSelection = e.target.innerText;

    // computer's selection
    let computerSelection = Math.random() * 10;

    if (computerSelection < 3) {
        computerSelection = 'Rock';
    } else if (computerSelection <= 7) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    // compare winners
    let result = checkWinner(playerSelection, computerSelection);

    if (result === 'Player') {
        result += ' wins!';
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!'
    }

    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}