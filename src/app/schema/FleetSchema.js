const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { status } = require('../helper/utils/ENUMS');

const FleetSchema = new mongoose.Schema({
  id_car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  id_rental: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rental',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: status,
      message: 'Invalid value'
    }
  },
  daily_value: {
    type: Number,
    required: true
  },
  plate: {
    type: String,
    unique: true,
    required: true
  }
});

FleetSchema.plugin(mongoosePaginate);

const Fleet = mongoose.model('Fleet', FleetSchema);
module.exports = Fleet;
