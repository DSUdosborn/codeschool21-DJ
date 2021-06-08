var playerTurn = 0;

var allTiles = document.querySelectorAll(".tile");
var turnDiv = document.querySelector("#turn");

function resetGame() {
  allTiles.forEach(function (tile) {
    tile.innerHTML = "";
    tile.classList.remove("x", "o");
  });
  turnDiv.innerHTML = "X";
  playerTurn = 0;
}

function checkForWinner(player) {
  var groups = ["row1", "row2", "row3", "col1", "col2", "col3", "diag1", "diag2"];

  var winner = false;
  groups.forEach(function (group) {
    var selector = "." + group + "." + player;
    if (document.querySelectorAll(selector).length == 3) {
      winner = true;
      console.log("winner on", group);
    }
  });

  return winner;
}

// for tile in allTiles
allTiles.forEach(function (tile) {
  tile.onclick = function () {
    if (tile.innerHTML == "") {
      if (playerTurn == 0) {
        tile.classList.add("x");
        tile.innerHTML = "X";

        if (checkForWinner("x")) {
          alert("Player X wins!!");
        }

        turnDiv.innerHTML = "O";
        playerTurn = 1;
      } else {
        tile.classList.add("o");
        tile.innerHTML = "O";

        if (checkForWinner("o")) {
          alert("Player O wins!!");
        }

        turnDiv.innerHTML = "X";
        playerTurn = 0;
      }
    } else {
      alert("Cheating is wrong.");
    }
  };
});
