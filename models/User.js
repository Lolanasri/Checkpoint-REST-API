const mongoose = require('mongoose');

// Définir le schéma utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number
});

// Exporter le modèle
module.exports = mongoose.model('User', userSchema);