var { Joi } = require("celebrate");

var newToucan = Joi.object({
    title: Joi.string()
        .regex(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s-]{1,60}$/) //Autorise la plupart des acents
        .required(),
    date: Joi.date().required()
});

var validId = Joi.object({id: Joi.string().hex().length(24).required()});
var validLimit = Joi.object({limit: Joi.number().integer()});

module.exports = { newToucan, validId, validLimit };