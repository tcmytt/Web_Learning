const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // Phương thức của moongose
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
