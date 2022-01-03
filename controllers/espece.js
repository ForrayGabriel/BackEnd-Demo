function readEspeces(req, res) {

    let Especes = require("../models/espece");

    Especes.find({})
    .then((especes) => {
        res.status(200).json(especes);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readEspece(req, res) {

    let Especes = require("../models/espece");

    Especes.findById({_id : req.params.id})
    .then((espece) => {
        res.status(200).json(espece);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.reads = readEspeces;
module.exports.read = readEspece;

