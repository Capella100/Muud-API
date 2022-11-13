const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const LinesSchema = new mongoose.Schema({
    pickupLines: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});
LinesSchema.plugin(random);
module.exports = mongoose.model('PickupLine', LinesSchema);