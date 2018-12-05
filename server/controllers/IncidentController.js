import incidentModel from '../models/incident-model';

const IncidentController = {
  getAllRedFlag(req, res) {
    incidentModel.getAll('red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  getByIdRedFlag(req, res) {
    incidentModel.get(parseInt(req.params.id), 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

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

  editLocationRedFlag(req, res) {
    incidentModel.editLocation(parseInt(req.params.id), req.body, 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  editCommentRedFlag(req, res) {
    incidentModel.editComment(parseInt(req.params.id), req.body, 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  deleteIncidentRedFlag(req, res) {
    incidentModel.deleteIncident(parseInt(req.params.id), 'red-flag')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },


  getAllIntervention(req, res) {
    incidentModel.getAll('intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  getByIdIntervention(req, res) {
    incidentModel.get(parseInt(req.params.id), 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

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

  editLocationIntervention(req, res) {
    incidentModel.editLocation(parseInt(req.params.id), req.body, 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

  editCommentIntervention(req, res) {
    incidentModel.editComment(parseInt(req.params.id), req.body, 'intervention')
      .then((result) => {
        res.status(result.status).json(result.data);
      })
      .catch((err) => {
        res.status(err.status).json({ error: err.error });
      });
  },

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
