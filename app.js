let output = document.querySelector("#output");
let coin = document.querySelector("#coin");
let output2 = document.querySelector("#output-2");
let winCount = 0; 

function Toss(value) {
    let number = Math.ceil(Math.random() * 2);
    output.innerHTML = "";

    if ((value === '1' && number === 1) || (value === '2' && number === 2)) {
        output.innerHTML = "You win!";
        console.log("You win");
        winCount++;
        output2.innerHTML = `Wins: ${winCount}`; 
    } else {
        output.innerHTML = "You lost the toss.";
        console.log("You lost Toss");
        winCount = 0; 
        output2.innerHTML = `Wins: ${winCount}`;
    }

    
    if (value === '1') {
        coin.src = 'heads.png';
        coin.alt = 'Heads';
    } else {
        coin.src = 'tails.webp'; 
        coin.alt = 'Tails';
    }
}
