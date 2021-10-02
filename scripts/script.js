let hold = 0;
let rollDice = 0;

let newGame = document.getElementById('newGame');
newGame.addEventListener('click', ()=>{
  console.log('match');
  hold=0;
  rolldice=0;
})

function rollingDice(){
  return Math.floor(Math.random()*6)+1;
}

console.log(hold);
console.log(rollDice);
let resultRollDice = document.getElementById('result-rolldice');
let holdBtn = document.getElementById('rollDice');
holdBtn.addEventListener('click', ()=>{
  console.log('rematch');
  hold=rollingDice();
  console.log(hold);
  resultRollDice.textContent = hold;
})