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

  console.log(item);
  console.log(num + " pressed");

  tic_tac_toe[~~(num / 5)][num % 5] = player;
  // console.log(tic_tac_toe[1]);

  if (player === "X") player = "O";
  else player = "X";

  let new_player_text = document.getElementById("text");
  new_player_text.innerHTML = "player " + player + "'s turn";

  console.log(player);
};

let table_div = document.getElementById("board");
let player_text = document.createElement("d");
let text = document.createTextNode("player " + player + "'s turn");
player_text.appendChild(text);
player_text.setAttribute("id", "text");
table_div.appendChild(player_text);

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
