const mongoose = require('mongoose');

let dogModel = {};

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Number,
    default: Date.now,
  },
});

dogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return dogModel.findOne(search, callback);
};

dogModel = mongoose.model('Dog', dogSchema);

module.exports.DogModel = dogModel;
module.exports.DogSchema = dogSchema;
