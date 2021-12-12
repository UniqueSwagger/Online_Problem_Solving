const buttonsContainer = document.getElementById("btns");

let buttons = [];
for (var i = 0; i < 9; i++) {
  buttons[i] = document.createElement("button");
  buttons[i].id = `btn${i + 1}`;
  buttons[i].innerHTML = i + 1;
  buttonsContainer.appendChild(buttons[i]);
}
function getNextLabel(currentLabel) {
  const labels = [1, 4, 7, 8, 9, 6, 3, 2];
  let index = labels.indexOf(+currentLabel) + 1;
  return labels[index] ? labels[index] : labels[0];
}
function updateLabel() {
  for (let i = 0; i < 4; i++) {
    buttons[i].innerHTML = getNextLabel(buttons[i].innerHTML);
  }
  for (let i = 5; i < 9; i++) {
    buttons[i].innerHTML = getNextLabel(buttons[i].innerHTML);
  }
}

btn5.addEventListener("click", updateLabel);
