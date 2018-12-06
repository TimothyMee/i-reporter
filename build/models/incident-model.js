"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _helper = _interopRequireDefault(require("../helpers/helper"));

var _schema = _interopRequireDefault(require("../helpers/schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var incidentModel = {
  getAll: function getAll(type) {
    var result = _helper.default.readJSONFile("./server/db/".concat(type, ".json"));

    return new Promise(function (resolve, reject) {
      if (result.length === 0) {
        reject({
          status: 404,
          error: "No ".concat(type, " has been created yet")
        });
      } else if (result === 'no such file') {
        reject({
          status: 404,
          error: 'No such file found'
        });
      }

      resolve({
        status: 200,
        data: result
      });
    });
  },
  createNew: function createNew(incident, type) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var incidentData = incident;
      incidentData.createdOn = _helper.default.newDate();
      incidentData.id = _helper.default.getNewID("./server/db/".concat(type, ".json"));

      var result = _joi.default.validate(incidentData, _schema.default.incidentSchema);

      if (result.error) {
        reject({
          status: 400,
          error: result.error.details[0].message
        });
      } else {
        _this.getAll(type).then(function (res) {
          var resData = res.data;
          resData.push(result.value);

          _helper.default.writeJSONFile("./server/db/".concat(type, ".json"), resData);
        }).catch(function () {
          _helper.default.writeJSONFile("./server/db/".concat(type, ".json"), [result.value]);
        });

        resolve({
          status: 201,
          data: {
            id: result.value.id,
            message: "Created ".concat(type, " record")
          }
        });
      }
    });
  },
  get: function get(id, type) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.getAll(type).then(function (res) {
        var resData = res.data;
        var result = resData.find(function (i) {
          return i.id === id;
        });

        if (!result) {
          reject({
            status: 404,
            error: "could not find record with id in ".concat(type, "s")
          });
        }

        resolve({
          status: 200,
          data: result
        });
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  editLocation: function editLocation(id, newLocation, type) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      _this3.getAll(type).then(function (res) {
        var resData = res.data;
        var result = resData.find(function (i) {
          return i.id === id;
        });

        if (!result) {
          reject({
            status: 404,
            error: "could not find record with id in ".concat(type, "s")
          });
        } else {
          if (newLocation.location) {
            result.location = newLocation.location;

            _helper.default.writeJSONFile("./server/db/".concat(type, ".json"), resData);

            resolve({
              status: 200,
              data: {
                id: result.id,
                message: "updated ".concat(type, " record's location")
              }
            });
          }

          reject({
            status: 400,
            error: 'update data is wrong. check data'
          });
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  editComment: function editComment(id, newComment, type) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      _this4.getAll(type).then(function (res) {
        var resData = res.data;
        var result = resData.find(function (i) {
          return i.id === id;
        });

        if (!result) {
          reject({
            status: 404,
            error: "could not find record with id in ".concat(type, "s")
          });
        } else {
          if (newComment.comment) {
            result.comment = newComment.comment;

            _helper.default.writeJSONFile("./server/db/".concat(type, ".json"), resData);

            resolve({
              status: 200,
              data: {
                id: result.id,
                message: "updated ".concat(type, " record's comment")
              }
            });
          }

          reject({
            status: 400,
            error: 'update data is wrong. check data'
          });
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  deleteIncident: function deleteIncident(id, type) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      _this5.getAll(type).then(function (res) {
        var resData = res.data;
        var result = resData.find(function (i) {
          return i.id === id;
        });

        if (!result) {
          reject({
            status: 404,
            error: "could not find record with id in ".concat(type, "s")
          });
        } else {
          // const index = res.indexOf(result);
          // res.splice(index, 1);
          var newData = resData.filter(function (incident) {
            return incident.id !== id;
          });

          _helper.default.writeJSONFile("./server/db/".concat(type, ".json"), newData);

          resolve({
            status: 200,
            data: {
              id: result.id,
              message: "".concat(type, " record has been deleted")
            }
          });
        }
      });
    });
  }
};
var _default = incidentModel;
exports.default = _default;
//# sourceMappingURL=incident-model.js.map