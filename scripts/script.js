console.log('bonjour');
function rollingDice(){
  return Math.floor(Math.random()*6)+1;
}

let rollDice = rollingDice();
console.log(rollDice);
let rollDiceBtn = document.getElementById('rolldice');
let result = document.getElementById('result');
  rollDiceBtn.addEventListener('click',()=>{
        result.innerText = rollingDice();
        console.log('match');
    })