import "./styles.css";

const tic_tac_toe = [
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"]
];

let id = 0;

const showAlert = num => console.log(id);

let table_div = document.getElementById("board");

let table = document.createElement("table");

tic_tac_toe.forEach(row => {
  let new_row = document.createElement("tr");
  row.forEach(node => {
    let new_node = document.createElement("td");
    let X_O = document.createTextNode(node);
    new_node.addEventListener("click", showAlert);
    id++;
    new_node.appendChild(X_O);
    new_row.appendChild(new_node);
  });
  table.appendChild(new_row);
});

table_div.appendChild(table);
