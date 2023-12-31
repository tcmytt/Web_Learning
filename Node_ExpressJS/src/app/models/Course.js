const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

//Schema là lược đồ
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        videoId: { type: String },
        level: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
