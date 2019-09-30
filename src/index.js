import "./styles.css";

const tic_tac_toe = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

let id = 0;
let player = "x";

const showAlert = num => {
  let item = document.getElementById(num);
  item.innerHTML = player;

  //  console.log(item);
  console.log(num + " pressed");

  tic_tac_toe[~~(num / 5)][num % 5] = player;
  // console.log(tic_tac_toe[1]);

  check_win();
  if (player === "x") player = "o";
  else player = "x";

  let new_player_text = document.getElementById("text");
  new_player_text.innerHTML = "player " + player + "'s turn";

  // console.log(player);
};

const check_win = () => {
  /*
  for (let i = 0; i < 3; i++) {
    //Check for x axis
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "x" &&
        tic_tac_toe[i][j + 1] === "x" &&
        tic_tac_toe[i][j + 2] === "x"
      ) {
        console.log("x wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "o" &&
        tic_tac_toe[i][j + 1] === "o" &&
        tic_tac_toe[i][j + 2] === "o"
      ) {
        console.log("o wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    // check for y axis
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "x" &&
        tic_tac_toe[i + 1][j] === "x" &&
        tic_tac_toe[i + 2][j] === "x"
      ) {
        console.log("x wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "o" &&
        tic_tac_toe[i + 1][j] === "o" &&
        tic_tac_toe[i + 2][j] === "o"
      ) {
        console.log("o wins");
        wictory();
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    // check for diagonal to right
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "x" &&
        tic_tac_toe[i + 1][j + 1] === "x" &&
        tic_tac_toe[i + 2][j + 2] === "x"
      ) {
        console.log("x wins");
        wictory();
        return;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        tic_tac_toe[i][j] === "o" &&
        tic_tac_toe[i + 1][j + 1] === "o" &&
        tic_tac_toe[i + 2][j + 2] === "o"
      ) {
        console.log("o wins");
        wictory();
        return;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    // check for diagonal to left
    for (let j = 4; j > 1; j--) {
      if (
        tic_tac_toe[i][j] === "x" &&
        tic_tac_toe[i + 1][j - 1] === "x" &&
        tic_tac_toe[i + 2][j - 2] === "x"
      ) {
        console.log("x wins");
        wictory();
        return;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 4; j > 1; j--) {
      if (
        tic_tac_toe[i][j] === "o" &&
        tic_tac_toe[i + 1][j - 1] === "o" &&
        tic_tac_toe[i + 2][j - 2] === "o"
      ) {
        console.log("o wins");
        wictory();
        return;
      }
    }
  }*/
  for (let i = 0; i < 5; i++) {
    //  console.log(tic_tac_toe[i].toString());
    if (tic_tac_toe[i].toString() === "x,x,x,x,x") {
      console.log("x wins");
      wictory("1");
    }
  }

  for (let i = 0; i < 5; i++) {
    //  console.log(tic_tac_toe[i].toString());
    if (tic_tac_toe[i].toString() === "o,o,o,o,o") {
      console.log("o wins");
      wictory("2");
    }
  }

  for (let i = 0; i < 5; i++) {
    if (
      tic_tac_toe[0][i] === "x" &&
      tic_tac_toe[1][i] === "x" &&
      tic_tac_toe[2][i] === "x" &&
      tic_tac_toe[3][i] === "x" &&
      tic_tac_toe[4][i] === "x"
    ) {
      console.log("x wins");
      wictory("1");
    }
  }

  for (let i = 0; i < 5; i++) {
    if (
      tic_tac_toe[0][i] === "o" &&
      tic_tac_toe[1][i] === "o" &&
      tic_tac_toe[2][i] === "o" &&
      tic_tac_toe[3][i] === "o" &&
      tic_tac_toe[4][i] === "o"
    ) {
      console.log("o wins");
      wictory("2");
    }
  }

  if (
    tic_tac_toe[0][0] === "x" &&
    tic_tac_toe[1][1] === "x" &&
    tic_tac_toe[2][2] === "x" &&
    tic_tac_toe[3][3] === "x" &&
    tic_tac_toe[4][4] === "x"
  ) {
    console.log("x wins");
    wictory("1");
  }

  if (
    tic_tac_toe[0][0] === "o" &&
    tic_tac_toe[1][1] === "o" &&
    tic_tac_toe[2][2] === "o" &&
    tic_tac_toe[3][3] === "o" &&
    tic_tac_toe[4][4] === "o"
  ) {
    console.log("o wins");
    wictory("2");
  }

  if (
    tic_tac_toe[4][0] === "x" &&
    tic_tac_toe[3][1] === "x" &&
    tic_tac_toe[2][2] === "x" &&
    tic_tac_toe[1][3] === "x" &&
    tic_tac_toe[0][4] === "x"
  ) {
    console.log("x wins");
    wictory("1");
  }

  if (
    tic_tac_toe[4][0] === "o" &&
    tic_tac_toe[3][1] === "o" &&
    tic_tac_toe[2][2] === "o" &&
    tic_tac_toe[1][3] === "o" &&
    tic_tac_toe[0][4] === "o"
  ) {
    console.log("o wins");
    wictory("2");
  }
};

const wictory = winner => {
  alert(`Player ${winner} won!`);
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
    let x_o = document.createTextNode(node);
    new_node.onclick = function() {
      showAlert(new_node.id);
    };
    id++;
    new_node.appendChild(x_o);
    new_row.appendChild(new_node);
  });
  table.appendChild(new_row);
});

table_div.appendChild(table);
