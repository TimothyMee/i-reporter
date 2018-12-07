const fs = require('fs');

const helpers = {

  newDate() {
    return new Date().toString();
  },

  writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
      if (err) {
        return err;
      }
      return true;
    });
  },

  readJSONFile(filename) {
    try {
      const data = fs.readFileSync(filename, 'utf8');
      return JSON.parse(data);
    } catch (e) {
      return 'no such file';
    }
  },


  getNewID(file) {
    const array = this.readJSONFile(file);

    if (array.length > 0 && array !== 'no such file') {
      return array[array.length - 1].id + 1;
    }
    return 1;
  },

};

export default helpers;
