var boardData = {};

boardData["row2col0"] = 8;
boardData["row3col2"] = 4;
boardData["row3col0"] = 2;

function tileKey(row, col) {
  return "row" + row + "col" + col;
}

function createBoard() {
  var boardDiv = document.querySelector("#board");

  // for i in range(4)
  for (var row = 0; row < 4; row += 1) {
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    boardDiv.appendChild(rowDiv);

    for (var col = 0; col < 4; col += 1) {
      // create new tile divs
      var key = tileKey(row, col);
      var tileDiv = document.createElement("div");
      tileDiv.id = key;
      tileDiv.classList.add("tile");
      rowDiv.appendChild(tileDiv);
    }
  }
}

function updateBoard() {
  for (var row = 0; row < 4; row += 1) {
    for (var col = 0; col < 4; col += 1) {
      var key = tileKey(row, col);
      var value = boardData[key];

      var tileDiv = document.querySelector("#" + key);
      if (value) {
        tileDiv.innerHTML = value;
        tileDiv.classList.add("tile-" + value);
      } else {
        tileDiv.innerHTML = "";
      }
    }
  }
}

createBoard();
updateBoard();
