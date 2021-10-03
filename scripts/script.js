let hold = 0;
let rollDice = 0;
let playerOne;
let playerTwo;
let globalOne;
let globalTwo;


/**----Initializing New Game ------- */
let newGame = document.getElementById('newGame');
newGame.addEventListener('click', ()=>{
  console.log('match');
  hold=0;
  rolldice=0;
  globalOne=0;
  globalTwo=0;
  playerOne=true;
})

/**------Roll Dice Function------ */
function rollingDice(){
  return Math.floor(Math.random()*6)+1;
}
/**------Aquiring result of the rolldice----- */
let resultRollDice = document.getElementById('result-rolldice');
let rollBtn = document.getElementById('rollDice');
rollBtn.addEventListener('click', ()=>{
  console.log('rematch');
  hold=rollingDice();
  console.log(hold);
  resultRollDice.textContent = hold;
})

/**------counting global score ----------------*/
let holdBtn = document.getElementById('hold');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
holdBtn.addEventListener('click',()=>{
  if (playerOne==true){
    globalOne= globalOne + hold;
    console.log(globalOne);
    result1.textContent = globalOne;
  }
  if(playerOne!==true){
    globalTwo=globalTwo + hold;
    console.log(globalTwo);
    result2.textContent = globalTwo;
  }
})