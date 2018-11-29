const express = require('express');

const router = express.Router();

router.use('/api/v1', require('./v1/incident.routes'));

// for undefined routes
router.use('/*', express.Router()
  .all('/*', (req, res) => {
    res.status(403).send('use an appropriate route');
  }));

module.exports = router;
