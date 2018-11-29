const fs = require('fs');

const newDate = () => new Date().toString();


function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      return err;
    }
    return true;
  });
}

function readJSONFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return 'no such file';
  }
}


function getNewID(file) {
  const array = readJSONFile(file);

  if (array.length > 0 && array !== 'no such file') {
    return array[array.length - 1].id + 1;
  }
  return 1;
}


module.exports = {
  getNewID,
  newDate,
  writeJSONFile,
  readJSONFile,
};
