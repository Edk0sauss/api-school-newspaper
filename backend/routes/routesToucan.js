var express = require("express");
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
                }
                res.json(toucans);
            });
    })
    // Une route pour créer un toucan
    .post(function(req,res) {
        var toucan = new Toucan(req.body);
        toucan.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.send({message: "Toucan ajouté !"});
        });
    });

module.exports = router;