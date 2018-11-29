const express = require('express');

const router = express.Router();

router.use('/api/v1', require('./v1/incident.routes'));

// for undefined routes
router.use('/*', express.Router()
  .all('/*', (req, res) => {
    res.status(403)
      .send('use an appropriate route with the "../api/v1/.." before the routes \n <br>'
            + 'e.g "https://timothy-i-reporter.herokuapp.com/api/v1/red-flags"\n\n <br><br>'
            + 'Available API Routes are listed below: \n\n <br><br>'
            + 'Red Flags: \n <br>'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/red-flags \n <br>'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id} \n <br>'
            + '  -POST https://timothy-i-reporter.herokuapp.com/api/v1/red-flags \n <br>'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}/location \n <br>'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}/comment \n <br>'
            + '  -DELETE https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id} \n\n <br><br>'

            + 'Interventions: \n <br>'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/interventions \n <br>'
            + '  -GET https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id} \n <br>'
            + '  -POST https://timothy-i-reporter.herokuapp.com/api/v1/interventions\n <br>'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}/location \n <br>'
            + '  -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}/comment \n <br>'
            + '  -DELETE https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id} \n <br>');
  }));

module.exports = router;
