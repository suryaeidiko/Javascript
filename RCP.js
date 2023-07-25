let computerMove = '';
let result = '';
let Won = 0;
let Lost = 0;
function Heads() {
    let randNumber = Math.random();
    if(randNumber >=0 && randNumber < 1/2){
        computerMove = 'Heads';
    }else if(randNumber >= 1/2 && randNumber <1){
        computerMove = 'Tails';
    }
    if(computerMove == 'Heads'){
        result = 'Won';
    }else if(computerMove == 'Tails'){
        result = 'Lost'
    }
    if(result == 'Won'){
        Won++;
        }else if(result == 'Lost'){
            Lost++;
        }
    document.getElementById("Display").innerHTML = `Result is Won : ${Won} and Lost : ${Lost}`;
}
function Tails() {
    let randNumber = Math.random();
    if(randNumber >=0 && randNumber < 1/2){
        computerMove = 'Heads';
    }else if(randNumber >= 1/2 && randNumber <1){
        computerMove = 'Tails'
    }
    if(computerMove == 'Heads'){
        result = 'Lost';
    }else if(computerMove == 'Tails'){
        result = 'Won';
    }
    if(result == 'Won'){
    Won++;
    }else if(result == 'Lost'){
        Lost++;
    }
    document.getElementById("Display").innerHTML = `Result is Won : ${Won} and Lost : ${Lost}`;
}