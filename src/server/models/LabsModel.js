var mongoose = require('mongoose');

var LabsSchema = new mongoose.Schema({
    date: Date,
    platelets: Number,
    hemoglobin: Number,
    whitecount: {type: Number, default: 0},
    anc: Number,
    magnesium: Number,
    potassium: Number
});

var LabsModel = mongoose.model('LabsModel', LabsSchema);