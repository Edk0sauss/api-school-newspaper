var multer = require("multer");
var env = require("../.env");

//Renvoie le nom de l'extension de file si son mime est autorisé, null sinon
var isAllowedMime = function(file) {
    var mime = file.mimetype;
    var ext = null;
    env.savedExtensions.forEach(extension => {
        var index = extension.knownMime.indexOf(mime);
        if (index>=0) {
            var theMime = extension.knownMime[index].split("/");
            ext = theMime[theMime.length-1];
        }
    });
    return ext;
};


// On ne sauvegarde que si on connait l'extension
var fileFilter = function(req,file,cb) {
    var shouldPass= isAllowedMime(file);
    cb(!shouldPass ? new Error("Extension inconnue"): null ,shouldPass);
};


// On envoie dans le dossier de destination en fonction de l'extension
var saveDestination = function(req,file,cb) {
    var mime = file.mimetype;
    var hasPassed = false;
    env.savedExtensions.forEach(extension => {
        if (extension.knownMime.includes(mime)) {
            hasPassed = true;
            cb(null,extension.path);
        }
    });
    if (!hasPassed) {
        cb(new Error("Impossible d'enregistrer le fichier"));
    }
};

//Les toucans sont només par leur date de parution
var aFileNeedAName = function(req,file,cb) {
    var extension = isAllowedMime(file);
    cb(null,"defaultName."+extension);
};

var storage = multer.diskStorage({
    destination: saveDestination,
    filename: aFileNeedAName,
});

var upload = multer({storage: storage, fileFilter: fileFilter});

module.exports = upload;