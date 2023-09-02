const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema là lược đồ
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        videoId: { type: String },
        level: { type: String },
        image: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
