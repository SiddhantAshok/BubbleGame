let pbtm = document.querySelector("#pbtm");
var score = 0;
var hitRandomNumber = 0;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreVal").innerHTML = score;
  
}

function getNewHit(){
  hitRandomNumber = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").innerHTML = hitRandomNumber;
}

function makeBubble(){
  
  var clutter = "";
  
  for(var i = 1; i <= 152; i++){
    let randomNumber = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  
  pbtm.innerHTML = clutter;
  
}

var timer = 10;

function runTimer(){
 var timerInterval = setInterval(function(){
  if (timer > 0) { 
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }else{
    clearInterval(timerInterval);
    pbtm.innerHTML = `<div class="showScore">
          <h4>Your Score : ${score}</h4>
          <h6>Reload the page to restart</h6>
        </div>`;
  }
 }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
  let clickedNumber = Number(details.target.textContent);
  if (hitRandomNumber == clickedNumber) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});

runTimer();

makeBubble();

getNewHit();

