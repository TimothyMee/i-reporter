"use strict";

var fs = require('fs');

var newDate = function newDate() {
  return new Date().toString();
};

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', function (err) {
    if (err) {
      return err;
    }

    return true;
  });
}

function readJSONFile(filename) {
  try {
    var data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return 'no such file';
  }
}

function getNewID(file) {
  var array = readJSONFile(file);

  if (array.length > 0 && array !== 'no such file') {
    return array[array.length - 1].id + 1;
  }

  return 1;
}

module.exports = {
  getNewID: getNewID,
  newDate: newDate,
  writeJSONFile: writeJSONFile,
  readJSONFile: readJSONFile
};
//# sourceMappingURL=helper.js.map