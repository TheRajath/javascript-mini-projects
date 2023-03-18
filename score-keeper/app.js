const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {

    if (!isGameOver) {

        player.score += 1;

        if (player.score === opponent.score && player.score === winningScore - 1) {

            winningScore += 1;
        }

        if (player.score === winningScore) {

            isGameOver = true;

            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.display.textContent = player.score;
    }
}

function reset() {

    isGameOver = false;

    for (let player of [player1, player2]) {

        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;

    }
}

player1.button.addEventListener('click', function () {

    updateScore(player1, player2);
});

player2.button.addEventListener('click', function () {

    updateScore(player2, player1);
});

winningScoreSelect.addEventListener('change', function () {

    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);
