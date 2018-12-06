"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _IncidentController = _interopRequireDefault(require("../controllers/IncidentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/red-flags', _IncidentController.default.getAllRedFlag);
router.get('/red-flags/:id', _IncidentController.default.getByIdRedFlag);
router.post('/red-flags', _IncidentController.default.createNewRedFlag);
router.patch('/red-flags/:id/location', _IncidentController.default.editLocationRedFlag);
router.patch('/red-flags/:id/comment', _IncidentController.default.editCommentRedFlag);
router.delete('/red-flags/:id', _IncidentController.default.deleteIncidentRedFlag);
router.get('/interventions', _IncidentController.default.getAllIntervention);
router.get('/interventions/:id', _IncidentController.default.getByIdIntervention);
router.post('/interventions', _IncidentController.default.createNewIntervention);
router.patch('/interventions/:id/location', _IncidentController.default.editLocationIntervention);
router.patch('/interventions/:id/comment', _IncidentController.default.editCommentIntervention);
router.delete('/interventions/:id', _IncidentController.default.deleteIncidentIntervention);
router.use('/api/v1', router); // for undefined routes

router.use('*', _express.default.Router().all('/*', function (req, res) {
  res.status(403).send('use appropriate routes');
}));
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map