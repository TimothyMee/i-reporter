const Joi = require('joi');

const incidentSchema = {
  id: Joi.number().positive().integer().greater(0)
    .required(),
  createdOn: Joi.required(),
  createdBy: Joi.number().positive().integer().greater(0)
    .required(),
  type: Joi.string().min(8).max(12).required(),
  name: Joi.string().required(),
  location: Joi.string().required(),
  status: Joi.string().required(),
  images: Joi.required(),
  videos: Joi.required(),
  comment: Joi.string().required(),
};

module.exports = {
  incidentSchema,
};
