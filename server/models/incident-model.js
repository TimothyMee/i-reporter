import Joi from 'joi';
import helper from '../helpers/helper';
import schema from '../helpers/schema';

const incidentModel = {
  /**
   * Gets all incidents.
   *
   * @param {string} type - The type of incident (redflag or intervention).
   */
  getAll(type) {
    const result = helper.readJSONFile(`./server/db/${type}.json`);
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
  },
  /**
   * Creates new incidents.
   *
   * @param {object} incident - The data of the incident to be created.
   * @param {string} type - The type of incident (redflag or intervention).
   */
  createNew(incident, type) {
    return new Promise((resolve, reject) => {
      const incidentData = incident;
      incidentData.createdOn = helper.newDate();
      incidentData.id = helper.getNewID(`./server/db/${type}.json`);

      const result = Joi.validate(incidentData, schema.incidentSchema);
      if (result.error) {
        reject({
          status: 400,
          error: result.error.details[0].message,
        });
      } else {
        this.getAll(type)
          .then((res) => {
            const resData = res.data;
            resData.push(result.value);
            helper.writeJSONFile(`./server/db/${type}.json`, resData);
          })
          .catch(() => {
            helper.writeJSONFile(`./server/db/${type}.json`, [result.value]);
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
  },
  /**
   * Gets an incidents by id.
   *
   * @param {int} id - The incident's id to fetch.
   * @param {string} type - The type of incident (redflag or intervention).
   */
  get(id, type) {
    return new Promise((resolve, reject) => {
      this.getAll(type)
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
  },
  /**
   * Edits an incident's location.
   *
   * @param {int} id - The incident's id to edited.
   * @param {object} newLocation - The new location.
   * @param {string} type - The type of incident (redflag or intervention).
   */
  editLocation(id, newLocation, type) {
    return new Promise((resolve, reject) => {
      this.getAll(type)
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
              helper.writeJSONFile(`./server/db/${type}.json`, resData);

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
  },
  /**
   * Edits an incident's comment.
   *
   * @param {int} id - The incident's id to edited.
   * @param {object} newComment - The new comment.
   * @param {string} type - The type of incident (redflag or intervention).
   */
  editComment(id, newComment, type) {
    return new Promise((resolve, reject) => {
      this.getAll(type)
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
              helper.writeJSONFile(`./server/db/${type}.json`, resData);

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
  },
  /**
   * Deletes an incidents by id.
   *
   * @param {int} id - The incident's id to delete.
   * @param {string} type - The type of incident (redflag or intervention).
   */
  deleteIncident(id, type) {
    return new Promise((resolve, reject) => {
      this.getAll(type)
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
            helper.writeJSONFile(`./server/db/${type}.json`, newData);


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
  },
};

export default incidentModel;
