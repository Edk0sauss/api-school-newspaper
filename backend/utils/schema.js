var { Joi } = require("celebrate");

var newToucan = Joi.object({
    title: Joi.string().alphanum().required(),
    date: Joi.date().required()
});

var validId = Joi.object({id: Joi.string().hex().length(24)});

module.exports = { newToucan, validId };