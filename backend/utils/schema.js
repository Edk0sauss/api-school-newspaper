var { Joi } = require("celebrate");

var newToucan = Joi.object({
    title: Joi.string()
        .regex(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s'-]{1,60}$/) //Autorise la plupart des acents
        .required(),
    date: Joi.date().required()
});

var validId = Joi.object({id: Joi.string().hex().length(24).required()});
var validGet = Joi.object({
    limit: Joi.number().integer(),
    before: Joi.date().timestamp(),
    after: Joi.date().timestamp()
});

module.exports = { newToucan, validId, validGet };