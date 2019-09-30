import "./styles.css";

const tic_tac_toe = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

let id = 0;
let player = "X";

const showAlert = num => {
  let item = document.getElementById(num);
  item.innerHTML = player;

  //  console.log(item);
  console.log(num + " pressed");

  tic_tac_toe[~~(num / 5)][num % 5] = player;
  // console.log(tic_tac_toe[1]);

  check_win();
  if (player === "X") player = "O";
  else player = "X";

  let new_player_text = document.getElementById("text");
  new_player_text.innerHTML = "player " + player + "'s turn";

  // console.log(player);
};

const check_win = () => {
  for (let i = 0; i < 3; i++) {
    //Check for x axis
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "X" &&
        tic_tac_toe[i][j + 1] === "X" &&
        tic_tac_toe[i][j + 2] === "X"
      ) {
        console.log("X wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "O" &&
        tic_tac_toe[i][j + 1] === "O" &&
        tic_tac_toe[i][j + 2] === "O"
      ) {
        console.log("O wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    // check for y axis
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "X" &&
        tic_tac_toe[i + 1][j] === "X" &&
        tic_tac_toe[i + 2][j] === "X"
      ) {
        console.log("X wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "O" &&
        tic_tac_toe[i + 1][j] === "O" &&
        tic_tac_toe[i + 2][j] === "O"
      ) {
        console.log("O wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    // check for diagonal to right
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "X" &&
        tic_tac_toe[i + 1][j + 1] === "X" &&
        tic_tac_toe[i + 2][j + 2] === "X"
      ) {
        console.log("X wins");
        wictory();
        return;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "O" &&
        tic_tac_toe[i + 1][j + 1] === "O" &&
        tic_tac_toe[i + 2][j + 2] === "O"
      ) {
        console.log("O wins");
        wictory();
        return;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    // check for diagonal to left
    for (let j = 4; j > 1; j--) {
      if (
        tic_tac_toe[i][j] === "X" &&
        tic_tac_toe[i + 1][j - 1] === "X" &&
        tic_tac_toe[i + 2][j - 2] === "X"
      ) {
        console.log("X wins");
        wictory();
        return;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 4; j > 1; j--) {
      if (
        tic_tac_toe[i][j] === "O" &&
        tic_tac_toe[i + 1][j - 1] === "O" &&
        tic_tac_toe[i + 2][j - 2] === "O"
      ) {
        console.log("O wins");
        wictory();
        return;
      }
    }
  }
};

const wictory = () => {
  let win = document.createTextNode("Wictory!");
  wictory_text.appendChild(win);
};

let table_div = document.getElementById("board");
let player_text = document.createElement("d");
let wictory_text = document.createElement("d");
let text = document.createTextNode("player " + player + "'s turn");
player_text.appendChild(text);
player_text.setAttribute("id", "text");
wictory_text.setAttribute("id", "won");
table_div.appendChild(player_text);
table_div.appendChild(wictory_text);

let table = document.createElement("table");

tic_tac_toe.forEach(row => {
  let new_row = document.createElement("tr");
  row.forEach(node => {
    let new_node = document.createElement("td");
    new_node.setAttribute("id", id);
    let X_O = document.createTextNode(node);
    new_node.onclick = function() {
      showAlert(new_node.id);
    };
    id++;
    new_node.appendChild(X_O);
    new_row.appendChild(new_node);
  });
  table.appendChild(new_row);
});

table_div.appendChild(table);
