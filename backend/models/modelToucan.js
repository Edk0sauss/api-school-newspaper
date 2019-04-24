var mongoose = require("mongoose");

var Schema = mongoose.Schema;

/**
 * Indique ce que l'on doit trouver dans un toucan
 */
var toucanSchema = new Schema ({
    title: {type : String, required: true}, // Chaque toucan doit avoir un titre et une date
    date: {type : Date, required: true},
});

// La date doit être unique
toucanSchema.index({date:-1},{unique: true});

module.exports = mongoose.model("Toucan",toucanSchema);