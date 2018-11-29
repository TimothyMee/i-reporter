/* eslint-disable prefer-promise-reject-errors */
const Joi = require('joi');
const helper = require('../helpers/helper');
const schema = require('../helpers/schema');


function getAll(type) {
  const result = helper.readJSONFile(`./data/${type}.json`);
  return new Promise((resolve, reject) => {
    if (result.length === 0) {
      reject({
        status: 404,
        error: `No ${type} has been created yet`,
      });
    } else if (result === 'no such file') {
      reject({
        status: 404,
        error: 'No such file found',
      });
    }
    resolve({
      status: 200,
      data: result,
    });
  });
}

function createNew(incident, type) {
  return new Promise((resolve, reject) => {
    const incidentData = incident;
    incidentData.createdOn = helper.newDate();
    incidentData.id = helper.getNewID(`./data/${type}.json`);

    const result = Joi.validate(incidentData, schema.incidentSchema);
    if (result.error) {
      reject({
        status: 400,
        error: result.error.details[0].message,
      });
    } else {
      getAll(type)
        .then((res) => {
          const resData = res.data;
          resData.push(result.value);
          helper.writeJSONFile(`./data/${type}.json`, resData);
        })
        .catch((err) => {
          helper.writeJSONFile(`./data/${type}.json`, [result.value]);
        });

      resolve({
        status: 201,
        data: {
          id: result.value.id,
          message: `Created ${type} record`,
        },
      });
    }
  });
}

function get(id, type) {
  return new Promise((resolve, reject) => {
    getAll(type)
      .then((res) => {
        const resData = res.data;
        const result = resData.find(i => i.id === id);
        if (!result) {
          reject({
            status: 404,
            error: `could not find record with id in ${type}s`,
          });
        }
        resolve({
          status: 200,
          data: result,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function editLocation(id, newLocation, type) {
  return new Promise((resolve, reject) => {
    getAll(type)
      .then((res) => {
        const resData = res.data;
        const result = resData.find(i => i.id === id);
        if (!result) {
          reject({
            status: 404,
            error: `could not find record with id in ${type}s`,
          });
        } else {
          if (newLocation.location) {
            result.location = newLocation.location;
            helper.writeJSONFile(`./data/${type}.json`, resData);

            resolve({
              status: 200,
              data: {
                id: result.id,
                message: `updated ${type} record's location`,
              },
            });
          }

          reject({
            status: 400,
            error: 'update data is wrong. check data',
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function editComment(id, newComment, type) {
  return new Promise((resolve, reject) => {
    getAll(type)
      .then((res) => {
        const resData = res.data;
        const result = resData.find(i => i.id === id);
        if (!result) {
          reject({
            status: 404,
            error: `could not find record with id in ${type}s`,
          });
        } else {
          if (newComment.comment) {
            result.comment = newComment.comment;
            helper.writeJSONFile(`./data/${type}.json`, resData);

            resolve({
              status: 200,
              data: {
                id: result.id,
                message: `updated ${type} record's comment`,
              },
            });
          }
          reject({
            status: 400,
            error: 'update data is wrong. check data',
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function deleteComment(id, type) {
  return new Promise((resolve, reject) => {
    getAll(type)
      .then((res) => {
        const resData = res.data;
        const result = resData.find(i => i.id === id);
        if (!result) {
          reject({
            status: 404,
            error: `could not find record with id in ${type}s`,
          });
        } else {
          // const index = res.indexOf(result);
          // res.splice(index, 1);

          const newData = resData.filter(incident => incident.id !== id);
          helper.writeJSONFile(`./data/${type}.json`, newData);


          resolve({
            status: 200,
            data: {
              id: result.id,
              message: `${type} record has been deleted`,
            },
          });
        }
      });
  });
}

module.exports = {
  getAll,
  createNew,
  get,
  editLocation,
  editComment,
  deleteComment,
};
