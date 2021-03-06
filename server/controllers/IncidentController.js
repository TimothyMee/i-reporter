import incidentModel from '../models/incident-model';

const IncidentController = {
  /**
   * Gets all Red Flag.
   *
   * @param {objects} [req] - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  getAllRedFlag(req, res) {
    incidentModel.getAll('red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  /**
   * Gets a Red Flag by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  getByIdRedFlag(req, res) {
    incidentModel.get(parseInt(req.params.id), 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  /**
   * Create a Red Flag.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  createNewRedFlag(req, res) {
    const newIntervention = req.body;
    incidentModel.createNew(newIntervention, 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  /**
   * Edits a Red Flag's Location by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  editLocationRedFlag(req, res) {
    incidentModel.editLocation(parseInt(req.params.id), req.body, 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Edits a Red Flag's Comment by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  editCommentRedFlag(req, res) {
    incidentModel.editComment(parseInt(req.params.id), req.body, 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Delete a Red Flag's Location by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  deleteIncidentRedFlag(req, res) {
    incidentModel.deleteIncident(parseInt(req.params.id), 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  /**
   * Gets all Intervention.
   *
   * @param {objects} [req] - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  getAllIntervention(req, res) {
    incidentModel.getAll('intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Gets a Intervention by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  getByIdIntervention(req, res) {
    incidentModel.get(parseInt(req.params.id), 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Create a Intervention.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  createNewIntervention(req, res) {
    const newIntervention = req.body;
    incidentModel.createNew(newIntervention, 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Edits a Intervention's Location by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  editLocationIntervention(req, res) {
    incidentModel.editLocation(parseInt(req.params.id), req.body, 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Edits a Intervention's Comment by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  editCommentIntervention(req, res) {
    incidentModel.editComment(parseInt(req.params.id), req.body, 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
  /**
   * Delete a Intervention's Location by id.
   *
   * @param {objects} req - The request Object from the user.
   * @param {objects} res - The response Object for the user.
   */
  deleteIncidentIntervention(req, res) {
    incidentModel.deleteIncident(parseInt(req.params.id), 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },
};
export default IncidentController;
