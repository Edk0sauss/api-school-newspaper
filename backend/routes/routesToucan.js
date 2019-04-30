var express = require("express");
var fs = require("fs");
var path = require("path");
var { celebrate } = require("celebrate");

var { newToucan, validId, validLimit } = require("../utils/schema");
var env = require("../.env");
var upload = require("../utils/fileSaver");
var Toucan = require("../models/modelToucan");
var router = express.Router();

router.route("/toucans")
    // Une route qui renvoie un json avec tous les toucans, si limit est défini et vaut n, on renvoie les n derniers toucans
    .get(celebrate({query: validLimit}),function(req,res) {
        Toucan.find()
            .sort({date:-1})
            .limit(req.query.limit)
            .exec(function (err, toucans) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(toucans);
                }
            });
    })

    // Une route pour créer un toucan
    .post(
        upload.fields([{name:"toucan", maxCount:1 }, {name:"cover", maxCount:1 }]),
        celebrate({body:newToucan}),
        function(req,res) {
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
// Renvoie le pdf du toucan avec l'id donné
router.route("/pdf/:id")
    .get(celebrate({params: validId}), function (req,res) {
        var pdfPath = path.format({
            dir: env.savedExtensions[1].path,
            name: req.params.id,
            ext: ".pdf"
        });
        res.sendFile(pdfPath);
    });
// Renvoie la cover du toucan avec l'id donné
router.route("/img/:id")
    .get(celebrate({params: validId}),function(req,res) {
        var imgPath = path.join(env.savedExtensions[0].path,"/",req.params.id);
        var fileKnown = false;
        env.savedExtensions[0].extensions.forEach(ext => {
            if (fs.existsSync(imgPath+ext)){
                imgPath = imgPath+ext;
                fileKnown = true;
            }
        });
        if (fileKnown) {
            res.sendFile(imgPath);
        } else {
            res.send(404,"Image non trouvée");
        }
    });
// Supprime le toucan avec l'id donné
router.route("/delete/:id")
    .post(celebrate({params: validId}), function(req,res) {
        Toucan.deleteOne({_id:req.params.id},
            function(err) {
                if (err) {
                    res.send(err);
                } else {    // Si on a supprimée l'entrée, on supprime le pdf
                    var pdfPath = path.format({
                        dir: env.savedExtensions[1].path,
                        name: req.params.id,
                        ext: ".pdf"
                    });
                    fs.unlink(pdfPath, (err) => {
                        if (err) {
                            res.send(err);
                        } else {    // Si on a supprimé le pdf on supprime l'image
                            var imgPath = path.join(env.savedExtensions[0].path,"/",req.params.id);
                            env.savedExtensions[0].extensions.forEach(ext => {
                                if (fs.existsSync(imgPath+ext)){
                                    imgPath = imgPath+ext;
                                    fs.unlink(imgPath, (err) => {
                                        if (err) {
                                            res.send(err);
                                        } else {
                                            res.send("Toucan supprimé");
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
    });

module.exports = router;