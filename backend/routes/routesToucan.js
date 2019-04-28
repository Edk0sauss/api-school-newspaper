var express = require("express");
var fs = require("fs");
var path = require("path");
var upload = require("../utils/fileSaver");
var Toucan = require("../models/modelToucan");
var router = express.Router();

router.route("/toucans")
    // Une route qui  renvoie un json avec tous les toucans
    .get(function(req,res) {
        Toucan.find()
            .sort({date:-1})
            .exec(function (err, toucans) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(toucans);
                }
            });
    })
    // Une route pour créer un toucan
    .post(upload.fields([{name:"toucan", maxCount:1 }, {name:"cover", maxCount:1 }]),function(req,res) {
        var toucan = new Toucan(req.body);
        var id = (toucan._id).toString();
        var index;
        // On renome les fichier avec la clé de l'entrée dans la database
        for (index in req.files) {
            var file = req.files[index][0];
            var extension = path.extname(file.path);
            var newPath = file.destination+"/"+id+extension;
            fs.rename(file.path,newPath, err => {
                if (err) {
                    res.err(err);
                }
            });
        }
        toucan.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send({message: "Toucan ajouté !", id: id});
            }
        });
    });

module.exports = router;