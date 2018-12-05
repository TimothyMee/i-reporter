const express = require('express');
// const helper = require('./helpers/helper');
const incidentModel = require('../../model/incident-model');

const router = express.Router();


/** *
 * These are the routes for the red-flag incidents
 * ** */

/* Get all red-flags */
router.get('/red-flags', (req, res) => {
  incidentModel.getAll('red-flag')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* get red-flag by id */
router.get('/red-flags/:id', (req, res) => {
  incidentModel.get(parseInt(req.params.id), 'red-flag')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* create new red-flag */
router.post('/red-flags', (req, res) => {
  const newIntervention = req.body;
  incidentModel.createNew(newIntervention, 'red-flag')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* edit red-flag location by id */
router.patch('/red-flags/:id/location', (req, res) => {
  incidentModel.editLocation(parseInt(req.params.id), req.body, 'red-flag')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* edit red-flag comment by id */
router.patch('/red-flags/:id/comment', (req, res) => {
  incidentModel.editComment(parseInt(req.params.id), req.body, 'red-flag')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* delete a red-flag */
router.delete('/red-flags/:id', (req, res) => {
  incidentModel.deleteComment(parseInt(req.params.id), 'red-flag')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});


/** *
 * These are the routes for the interventions incidents
 * ** */

/* Get all interventions */
router.get('/interventions', (req, res) => {
  incidentModel.getAll('intervention')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* get intervention by id */
router.get('/interventions/:id', (req, res) => {
  incidentModel.get(parseInt(req.params.id), 'intervention')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* create new intervention */
router.post('/interventions', (req, res) => {
  const newIntervention = req.body;
  incidentModel.createNew(newIntervention, 'intervention')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* edit intervention location by id */
router.patch('/interventions/:id/location', (req, res) => {
  incidentModel.editLocation(parseInt(req.params.id), req.body, 'intervention')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* edit intervention comment by id */
router.patch('/interventions/:id/comment', (req, res) => {
  incidentModel.editComment(parseInt(req.params.id), req.body, 'intervention')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

/* delete a intervention */
router.delete('/interventions/:id', (req, res) => {
  incidentModel.deleteComment(parseInt(req.params.id), 'intervention')
    .then((result) => {
      res.status(result.status).send(result.data);
    })
    .catch((err) => {
      res.status(err.status).send(err.error);
    });
});

module.exports = router;
