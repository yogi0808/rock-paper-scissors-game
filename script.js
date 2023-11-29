const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const moves = document.querySelector('.result');
const score = document.querySelector('.score')
const btn = document.querySelector('.auto-btn');

const scores = {
    yourScore: 0,
    opponentScore: 0,
    tai: 0
}

let pcMove = '';
let userMove = '';

let uMove = '';
let pMove = '';

let autoPl = false;
let intervalId;

function Moves() {
    if (userMove === 'Rock') {
        uMove = '✊🏻';
    } else if (userMove === 'Paper') {
        uMove = '🖐🏻';
    } else if (userMove === 'Scissors') {
        uMove = '✌🏻️';
    };

    if (pcMove === 'Rock') {
        pMove = '✊🏻';
    } else if (pcMove === 'Paper') {
        pMove = '🖐🏻';
    } else if (pcMove === 'Scissors') {
        pMove = '✌🏻️';
    }

};

rock.addEventListener('click', () => {
    userMove = 'Rock'

    pcMoves(pcMove);
    compair(pcMove, userMove);

    Moves();

    moves.innerHTML = `<p>your move <span>${uMove}</span>   <span>${pMove}</span> pc move</p>
    <h4>${result}</h4>`


    score.innerText = `Your Score: ${scores.yourScore}
        Opponent Score: ${scores.opponentScore}
        tai: ${scores.tai}`

})


paper.addEventListener('click', () => {
    userMove = 'Paper'

    pcMoves(pcMove);
    compair(pcMove, userMove);

    Moves();

    moves.innerHTML = `<p>your move <span>${uMove}</span>   <span>${pMove}</span> pc move</p>
    <h4>${result}</h4>`

    score.innerText = `Your Score: ${scores.yourScore}
        Opponent Score: ${scores.opponentScore}
        tai: ${scores.tai}`

})

scissors.addEventListener('click', () => {
    userMove = 'Scissors'

    pcMoves(pcMove);
    compair(pcMove, userMove);

    Moves();

    moves.innerHTML = `<p>your move <span>${uMove}</span>   <span>${pMove}</span> pc move</p>
    <h4>${result}</h4>`

    score.innerText = `Your Score: ${scores.yourScore}
        Opponent Score: ${scores.opponentScore}
        tai: ${scores.tai}`

})

btn.addEventListener('click', () => {
    autoPlay();

    if (btn.innerHTML === "Auto Play") {
        btn.innerHTML = "Stop auto play";
    } else {
        btn.innerHTML = "Auto Play";
    };
})

function autoPlay() {

    if (!autoPl) {
        intervalId = setInterval(() => {
            userMoves();

            pcMoves(pcMove);
            compair(pcMove, userMove);

            Moves();

            moves.innerHTML = `<p>your move <span>${uMove}</span>   <span>${pMove}</span> pc move</p>
        <h4>${result}</h4>`

            score.innerText = `Your Score: ${scores.yourScore}
            Opponent Score: ${scores.opponentScore}
            tai: ${scores.tai}`
        }, 1000);

        autoPl = true;
    } else {
        clearInterval(intervalId);
        autoPl = false;
    }


}


function compair(pcMove, userMove) {
    if (userMove === 'Rock') {
        if (pcMove === 'Rock') {
            result = 'tai.'
            scores.tai++;
        } else if (pcMove === 'Paper') {
            result = 'you lose.'
            scores.opponentScore++;
        } else if (pcMove === 'Scissors') {
            result = 'you won.'
            scores.yourScore++;
        }
    } else if (userMove === 'Paper') {
        if (pcMove === 'Rock') {
            result = 'you won.'
            scores.yourScore++;
        } else if (pcMove === 'Paper') {
            result = 'tai.'
            scores.tai++;
        } else if (pcMove === 'Scissors') {
            result = 'you lose.'
            scores.opponentScore++;
        }
    } else if (userMove === 'Scissors') {
        if (pcMove === 'Rock') {
            result = 'you lose.'
            scores.opponentScore++;
        } else if (pcMove === 'Paper') {
            result = 'you won.'
            scores.yourScore++;
        } else if (pcMove === 'Scissors') {
            result = 'tai.'
            scores.tai++;
        }
    }

}


function pcMoves() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        pcMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        pcMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        pcMove = 'Scissors';
    }
}

function userMoves() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        userMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        userMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        userMove = 'Scissors';
    }
}