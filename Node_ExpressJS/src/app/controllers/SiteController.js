const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        // try {
        //     res.json(await Course.find({}));
        // } catch (error) {
        //     res.status(400).json({ error: 'Fail to get Course' });
        // }
        // res.render("home")

        await Course.find({})
            .then((courses) => {
                res.render('home', { courses: mutipleMongooseToObject(courses) });
            })
            .catch((error) => next(error));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
