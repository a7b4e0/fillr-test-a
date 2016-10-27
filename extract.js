var jsdom = require("jsdom");

module.exports.extract = function(window) {

  // Write your solution to Task #1 - Extract Metadata task here
  let document = window.document;
  let allInputs = document.getElementsByTagName("input");

  var inputHashTable = {}
  for (var i = 0; i < allInputs.length; i++) {
    let input = allInputs[i];

    let name = input.name;
    let label = getLabelForInput(input);

    if (label) {
      let key = label;
      let value = (label + " " + name);

      inputHashTable[key] = value;
    }
  }

  return inputHashTable;
}

function getLabelForInput(input) {
  let inputCell = input.parentNode;
  let inputRow = inputCell.parentNode;
  let labelCell = inputRow.firstChild;
  let label = labelCell.textContent;

  return label.trim();
}
