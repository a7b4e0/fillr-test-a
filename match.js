module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  let regex = /card expire date (\w*)$/;
  return matchHashTableKeys(hash, regex);
}

function matchHashTableKeys(hash, regex) {
  var matchedKeys = [];

  for (let key in hash) {
    if (regex.test(key)) {
      matchedKeys.push(key);
    }
  }

  return matchedKeys;
}
