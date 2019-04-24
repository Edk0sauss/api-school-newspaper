var mangoose = require("mongoose");

var Schema = mangoose.Schema;

/**
 * Indique ce que l'on doit trouver dans un toucan
 */
var toucanSchema = new Schema ({
    title: String,
    date: Date,
});

// La date doit être unique
toucanSchema.index({date:-1},{unique: true});

module.exports = mangoose.model("Toucan",toucanSchema);