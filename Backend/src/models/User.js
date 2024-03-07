//These files define database models and schemas using libraries like Mongoose for MongoDB or Sequelize for SQL databases. 
//Each model represents a specific entity in your application (e.g., users, books) and defines its structure, properties, and any associated validation or behavior.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);