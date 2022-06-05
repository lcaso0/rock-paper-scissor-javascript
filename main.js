const computermoves = ["rock", "paper", "scissor"];

document.getElementById("rock").onclick = function() {
  var random = Math.floor(Math.random() * computermoves.length);
  var random_move = computermoves[random];
  
  if (random_move == "rock") {
    //console.log("Draw");
    draw(random_move);
  }
  if (random_move == "paper") {
    //console.log("You Lose");
    lose(random_move);
  }
  if (random_move == "scissor") {
    //console.log("You win");
    win();
  }
} 

document.getElementById("paper").onclick = function() {
  var random = Math.floor(Math.random() * computermoves.length);
  var random_move = computermoves[random];
  
  if (random_move == "rock") {
    //console.log("You win")
    win();
  }
  if (random_move == "paper") {
    //console.log("Draw");
    draw(random_move);
  }
  if (random_move == "scissor") {
    //console.log("You Lose");
    lose(random_move);
  }
}

document.getElementById("scissor").onclick = function() {
  var random = Math.floor(Math.random() * computermoves.length);
  var random_move = computermoves[random];
  
  if (random_move == "rock") {
    //console.log("You Lose")
    lose(random_move);
  }
  if (random_move == "paper") {
    //console.log("You Win");
    win();
  }
  if (random_move == "scissor") {
    //console.log("Draw");
    draw(random_move);
  }
}


function win() {
  var playerscore = document.getElementById("playerscore").innerText;
  var playerscore_int = parseInt(playerscore);
  document.getElementById("playerscore").innerText = playerscore_int + 1;
  document.getElementById("whowins").innerText = "Player Win";
  decreasemove();
}

function lose(computermove) {
  var computerscore = document.getElementById("computerscore").innerText;
  var computerscore_int = parseInt(computerscore);
  document.getElementById("computerscore").innerText = computerscore_int + 1;
  document.getElementById("whowins").innerText = "Computer Win with " + computermove;
  decreasemove();
}

function draw(computermove) {
  document.getElementById("whowins").innerText = "DRAW " + computermove;
  decreasemove();
}


function decreasemove() {

  var moveleft = document.getElementById("moveleft").innerText;
  var moveleft_int = parseInt(moveleft);
  
  if (moveleft_int == 1) {
    document.getElementById("moveleft").innerText = moveleft_int - 1;
    var computerscore = document.getElementById("computerscore").innerText;
    var computerscore_int = parseInt(computerscore);
    var playerscore = document.getElementById("playerscore").innerText;
    var playerscore_int = parseInt(playerscore);
    
    if (playerscore_int > computerscore_int) {
      document.getElementById("container").innerHTML = `
        <h1>Game Over!</h1>
        <h1 style="color: green;">Player Win The game</h1>
        <button style="margin-top: 35px; width: 300px; height: 40px; background: white; color: black; font-size: 1.4rem; font-weight: bold;" onclick="window.location.reload()">Retry!</button>
      `
    }
    
    if (playerscore_int < computerscore_int) {
      document.getElementById("container").innerHTML = `
        <h1>Game Over!</h1>
        <h1 style="color: red;">You Lost the Game</h1>
        <button style="margin-top: 35px; width: 300px; height: 40px; background: white; color: black; font-size: 1.4rem; font-weight: bold;" onclick="window.location.reload()">Retry!</button>
      `
    }
    
    if (playerscore_int == computerscore_int) {
      document.getElementById("container").innerHTML = `
        <h1>Game Over!</h1>
        <h1 style="color: white;">The Game Ended as DRAW</h1>
        <button style="margin-top: 35px; width: 300px; height: 40px; background: white; color: black; font-size: 1.4rem; font-weight: bold;" onclick="window.location.reload()">Retry!</button>
      `
    }
  }
  
  document.getElementById("moveleft").innerText = moveleft_int - 1;
}