const express = require('express');

const router = express.Router();

router.use('/api/v1', require('./v1/incident.routes'));

// for undefined routes
router.use('/*', express.Router()
  .all('/*', (req, res) => {
    res.status(403)
      .send('use an appropriate route with the "../api/v1/.." before the routes \n'
            + 'e.g "https://timothy-i-reporter.herokuapp.com/api/v1/red-flags"\n\n'
            + 'Available API Routes are listed below: \n\n'
            + 'Red Flags: \n'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/red-flags \n'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id} \n'
            + '  -POST https://timothy-i-reporter.herokuapp.com/api/v1/red-flags \n'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}/location \n'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}/comment \n'
            + '  -DELETE https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id} \n\n'

            + 'Interventions: \n'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/interventions \n'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id} \n'
            + '  -POST https://timothy-i-reporter.herokuapp.com/api/v1/interventions\n'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}/location \n'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}/comment \n'
            + '  -DELETE https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id} \n');
  }));

module.exports = router;
