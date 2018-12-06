"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _incidentModel = _interopRequireDefault(require("../models/incident-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IncidentController = {
  getAllRedFlag: function getAllRedFlag(req, res) {
    _incidentModel.default.getAll('red-flag').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  getByIdRedFlag: function getByIdRedFlag(req, res) {
    _incidentModel.default.get(parseInt(req.params.id), 'red-flag').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  createNewRedFlag: function createNewRedFlag(req, res) {
    var newIntervention = req.body;

    _incidentModel.default.createNew(newIntervention, 'red-flag').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  editLocationRedFlag: function editLocationRedFlag(req, res) {
    _incidentModel.default.editLocation(parseInt(req.params.id), req.body, 'red-flag').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  editCommentRedFlag: function editCommentRedFlag(req, res) {
    _incidentModel.default.editComment(parseInt(req.params.id), req.body, 'red-flag').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  deleteIncidentRedFlag: function deleteIncidentRedFlag(req, res) {
    _incidentModel.default.deleteIncident(parseInt(req.params.id), 'red-flag').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  getAllIntervention: function getAllIntervention(req, res) {
    _incidentModel.default.getAll('intervention').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  getByIdIntervention: function getByIdIntervention(req, res) {
    _incidentModel.default.get(parseInt(req.params.id), 'intervention').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  createNewIntervention: function createNewIntervention(req, res) {
    var newIntervention = req.body;

    _incidentModel.default.createNew(newIntervention, 'intervention').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  editLocationIntervention: function editLocationIntervention(req, res) {
    _incidentModel.default.editLocation(parseInt(req.params.id), req.body, 'intervention').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  editCommentIntervention: function editCommentIntervention(req, res) {
    _incidentModel.default.editComment(parseInt(req.params.id), req.body, 'intervention').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  },
  deleteIncidentIntervention: function deleteIncidentIntervention(req, res) {
    _incidentModel.default.deleteIncident(parseInt(req.params.id), 'intervention').then(function (result) {
      res.status(result.status).json(result.data);
    }).catch(function (err) {
      res.status(err.status).json({
        error: err.error
      });
    });
  }
};
var _default = IncidentController;
exports.default = _default;
//# sourceMappingURL=IncidentController.js.map