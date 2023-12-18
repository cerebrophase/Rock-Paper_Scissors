        let round = '';
        let playerScore = 0;
        let computerScore = 0;

        function getComputerChoice() {
            const randomNum = Math.floor(Math.random() * 3);

            switch (randomNum) {
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissors";
                default:
                    return null;
            }
        }
        let computerChoice = getComputerChoice();
        console.log(getComputerChoice(computerChoice));


        function playRound(playerSelection, computerSelection) {
            const choices = ['rock', 'paper', 'scissors'];
            playerSelection = playerSelection.toLowerCase();

            if (playerSelection === computerSelection) {
                return "It's a tie! You both chose " + playerSelection + ".";
            }
            else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore++;
                return "You Win! " + playerSelection + " beats " + computerSelection + ".";
            }
            else {
                computerScore++;
                return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
            }
        }

        function displayResult(result) {
            document.getElementById('result').innerHTML = '<p>' + result + '</p>';
        }

        function displayScore() {
            document.getElementById('scoreMessage').innerHTML = '<p>Player: ' + playerScore + '  |   Computer: ' + computerScore + ' </p>';
        }

        function checkWinner() {
            if (playerScore === 5 || computerScore === 5) {
                let winner = playerScore === 5 ? "You" : "Computer";
                document.getElementById('winner').innerHTML = '<p>' + winner + ' won the game!</p>';
                document.getElementById('buttons').innerHTML = ''; // Remove the buttons once the game is over
                document.getElementById('finalResults').classList.remove('hidden');
            }
        }

        function startGame() {
            document.getElementById('start-container').style.display = 'none';
            document.getElementById('game-container').classList.remove('hidden');
        }

        function playAgain() {
            round = 1;
            playerScore = 0;
            computerScore = 0;
            document.getElementById('finalResults').classList.add('hidden');
            document.getElementById('buttons').innerHTML = `
                <button id="rockbtn" class="btn">ROCK</button>
                <button id="paperbtn" class="btn">PAPER</button>
                <button id="scissorsbtn" class="btn">SCISSORS</button>`;
            displayResult('');
            displayScore();
        }

        function playerChoice(choice) {
            let computerChoice = getComputerChoice();
            let roundResult = playRound(choice, computerChoice);
            
            displayResult('Round ' + round + ': ' + roundResult);
            displayScore();
            checkWinner();
        
            round++;
        }
        