var jwt = require("jsonwebtoken");
var env = require("../.env");

/**
 * Un middleware qui vérifie que l'utilisateur ayant envoyé
 * la requete soit bien authentifié.
 */

function isLogged(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        res.status(401).end("Vous n'êtes pas authentifié");
    }
    try {
        if(jwt.verify(token,env.tokenSecret)) { // Si le token n'est pas compromis
            next();
        } else {
            res.status(400).end("Une erreur s'est produite lors de l'authentification");
        }
    } catch (err) {
        res.status(400).end("Une erreur s'est produite lors de l'authentification");
    }
}

module.exports = isLogged;