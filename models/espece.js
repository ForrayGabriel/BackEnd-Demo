var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EspeceSchema = new Schema({
  nom : String,
  nb_pattes : String
});

module.exports = mongoose.model('Espece', EspeceSchema);
