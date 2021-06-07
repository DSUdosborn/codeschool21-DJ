console.log("Welcome to Tic-Tac-Toe.");

var allTiles = document.querySelectorAll(".tile");
//console.log("All tiles:", allTiles);


// for tile in allTiles
allTiles.forEach(function (tile) {
  console.log("in the loop:", tile);
  tile.onclick = function () {
    console.log("Click!");
    tile.innerHTML = "!";
  };
});



