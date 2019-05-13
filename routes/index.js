var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var util = require('../util');
var path = require('path');

// Login
// router.get('/login', function (req, res) {
//     var username = req.flash('username')[0];
//     var errors = req.flash('errors')[0] || {};
//     res.render('insec_db/home/login', {
//         username:username,
//         errors:errors,
//         page:req.path
//     });
// });

// Post Login
router.post('/login',
    function(req, res, next) {
        var errors = {};
        var isValid = true;
        if(!req.body.username) {
            isValid = false;
            errors.username = '아이디를 적어 주세요.';
        }
        if(!req.body.password) {
            isValid = false;
            errors.password = '패스워드를 적어 주세요.';
        }

        if(isValid) {
            next();
        } else {
            // req.flash('errors', errors);
            res.redirect('/login');
        }
    },
    passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login'
    })
);

// Logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// TrainingDate
var TrainingDate = require('../models/TrainingDate');
// index
router.get('/training-dates', function(req, res) {
    TrainingDate.find({})
    .sort('startDate -solutionName')
    .exec(function(err, trainingDates) {
        if(err) return res.json(err);

        TrainingDate.distinct('solutionName',function(err, solutionName) {
        console.log('solutionName', solutionName)
        console.log('trainingDates', trainingDates)

            res.status(200).json({ trainingDates, solutionName, })
        });
    });
});

// new
router.get('/training-dates/new', util.isLoggedin, function(req, res) {
    TrainingDate.distinct('solutionName', function(err, solutionName) {
        res.render('insec_db/training-dates/new', {
    		page:req.path,
    		solutionName:solutionName
    	});
    });
});

// create
router.post('/training-dates', util.isLoggedin, function(req, res) {
    TrainingDate.create(req.body, function (err, trainingDates) {
        if(err) return res.json(err);
        res.redirect('/training-dates');
    });
});

// edit
router.get('/training-dates/edit', util.isLoggedin, function(req, res) {
    TrainingDate.find({})
    .sort('startDate -solutionName')
    .exec(function(err, trainingDates) {
        if(err) return res.json(err);
        TrainingDate.distinct('solutionName',function(err, solutionName) {
            res.render('insec_db/training-dates/edit', {
            	page:req.path,
            	trainingDates:trainingDates,
            	solutionName:solutionName
            });
        });
    });
});

// update
router.put('/training-dates', util.isLoggedin, function(req, res) {
    let arr = []
    
    let bodyID = req.body.id

    bodyID.forEach(item => {
        arr.push(item);
    })

    let obj = {
        id: req.body.id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        title: req.body.title,
        period: req.body.period,
        time: req.body.time,
        place: req.body.place
    }

    arr.forEach((data, count) => {
        req.body.id = obj.id[count]
        req.body.startDate = obj.startDate[count]
        req.body.endDate = obj.endDate[count]
        req.body.title = obj.title[count]
        req.body.period = obj.period[count]
        req.body.time = obj.time[count]
        req.body.place = obj.place[count]
        req.body.updatedAt = Date.now();

        TrainingDate.findOneAndUpdate({ _id: req.body.id }, req.body, {runValidators:true}, (err, trainingDate) => {
            if(err) {
                // req.flash('trainingDate', req.body);
                // return req.flash('errors', util.parseError(err));
            }
        });      
    });
    res.redirect('/training-dates');
});

// destroy
router.delete('/training-dates/:id', util.isLoggedin, function(req, res) {
    TrainingDate.deleteOne({_id:req.params.id}, function(err) {
        if(err) return res.json(err);
        res.redirect('/training-dates');
    });
});


// SeminarDate
var SeminarDate = require('../models/SeminarDate');
// index
router.get('/seminar-dates', function(req, res) {
    SeminarDate.find({})
    .sort('startDate -solutionName')
    .exec(function(err, seminarDates) {
        if(err) return res.json(err);
        SeminarDate.distinct('solutionName',function(err, solutionName) {
            res.status(200).json({
                seminarDates:seminarDates,
            	solutionName:solutionName
            })
        });
    });
});

// new
router.get('/seminar-dates/new', util.isLoggedin, function(req, res) {
    SeminarDate.distinct('solutionName', function(err, solutionName){
        res.render('insec_db/seminar-dates/new', {
        	page:req.path,
        	solutionName:solutionName
        });
    });
});

// create
router.post('/seminar-dates', util.isLoggedin, function(req, res) {
    SeminarDate.create(req.body, function (err, seminarDates) {
        if(err) return res.json(err);
        res.redirect('/seminar-dates');
    });
});

// edit
router.get('/seminar-dates/edit', util.isLoggedin, function(req, res) {
    SeminarDate.find({})
    .sort('startDate -solutionName')
    .exec(function(err, seminarDates) {
        if(err) return res.json(err);
        SeminarDate.distinct('solutionName',function(err, solutionName) {
            res.render('insec_db/seminar-dates/edit', {
            	page:req.path,
            	seminarDates:seminarDates,
            	solutionName:solutionName
            });
        });
    });
});

// update
router.put('/seminar-dates', util.isLoggedin, function(req, res) {
    let arr = []
    
    let bodyID = req.body.id

    bodyID.forEach(item => {
        arr.push(item);
    })

    let obj = {
        id: req.body.id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        title: req.body.title,
        period: req.body.period,
        time: req.body.time,
        place: req.body.place
    }

    arr.forEach((data, count) => {
        req.body.id = obj.id[count]
        req.body.startDate = obj.startDate[count]
        req.body.endDate = obj.endDate[count]
        req.body.title = obj.title[count]
        req.body.period = obj.period[count]
        req.body.time = obj.time[count]
        req.body.place = obj.place[count]
        req.body.updatedAt = Date.now();

        SeminarDate.findOneAndUpdate({ _id: req.body.id }, req.body, {runValidators:true}, (err, seminarDate) => {
            if(err) {
                // req.flash('seminarDate', req.body);
                // return req.flash('errors', util.parseError(err));
            }
        });      
    });
    res.redirect('/seminar-dates');
});

// destroy
router.delete('/seminar-dates/:id', util.isLoggedin, function(req, res) {
    SeminarDate.deleteOne({_id:req.params.id}, function(err) {
        if(err) return res.json(err);
        res.redirect('/seminar-dates');
    });
});

//User
var User = require('../models/User');
// index
router.get('/users', util.isLoggedin, function(req, res) {
    User.find({})
    .sort({username:1})
    .exec(function(err, users) {
        if(err) return res.json(err);
        res.render('insec_db/users/index', {
        	page:req.path,
        	users:users
        });
    });
});

// new
// router.get('/users/new', function(req, res) {
//     var user = req.flash('user')[0] || {};
//     var errors = req.flash('errors')[0] || {};
//     res.render('insec_db/users/new', {
//     	page:req.path,
//     	user:user,
//     	errors:errors
//     });
// });

// // create
// router.post('/users', function(req, res) {
//     User.create(req.body, function(err, user) {
//         if(err) {
//             req.flash('user', req.body);
//             req.flash('errors', parseError(err));
//             return res.redirect('/users/new');
//         }
//         res.redirect('/users');
//     });
// });

// show
router.get('/users', function(req, res) {
    User.findOne({username:req.params.username}, function(err, user) {
        if(err) return res.json(err);
        res.render('insec_db/users/show', {
        	page:req.path,
        	user:user
        });
    });
});

module.exports = router;