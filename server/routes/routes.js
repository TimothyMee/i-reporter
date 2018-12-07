/** Importing necessary dependencies [express and controllers]. */
import express from 'express';
import IncidentController from '../controllers/IncidentController';

const router = express.Router();

/** Routes for Red Flag incident. */
router.get('/red-flags', IncidentController.getAllRedFlag);
router.get('/red-flags/:id', IncidentController.getByIdRedFlag);
router.post('/red-flags', IncidentController.createNewRedFlag);
router.patch('/red-flags/:id/location', IncidentController.editLocationRedFlag);
router.patch('/red-flags/:id/comment', IncidentController.editCommentRedFlag);
router.delete('/red-flags/:id', IncidentController.deleteIncidentRedFlag);

/** Routes for Intervention incident. */
router.get('/interventions', IncidentController.getAllIntervention);
router.get('/interventions/:id', IncidentController.getByIdIntervention);
router.post('/interventions', IncidentController.createNewIntervention);
router.patch('/interventions/:id/location', IncidentController.editLocationIntervention);
router.patch('/interventions/:id/comment', IncidentController.editCommentIntervention);
router.delete('/interventions/:id', IncidentController.deleteIncidentIntervention);


router.use('/api/v1', router);

/** Catering for undefined routes. */
router.use('*', express.Router()
  .all('/*', (req, res) => {
    res.status(403)
      .json({
        error: 'please use a valid route',
      });
  }));

export default router;
