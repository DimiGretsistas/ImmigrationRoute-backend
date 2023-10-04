const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  journey: { type: Schema.Types.ObjectId, ref: 'Journey' }
});

module.exports = model('Task', taskSchema);
