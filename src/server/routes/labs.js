//var express = require('express');
var jwt = require('express-jwt');
//var cors = require('cors');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var mongoose = require('mongoose');

var Labs = mongoose.model('Labs');

var baseUrl = '/api/labs';

module.exports = function(router) {
    // router.get(baseUrl, function (req, res, next) {
    //     var queryCallback = function (err, posts) {
    //         if (err) {
    //             return next(err);
    //         }
    //
    //         res.json(posts);
    //     };
    //
    //     if (req.query.author) {
    //         Post.find({'author': req.query.author}, queryCallback);
    //     } else {
    //         Post.find(queryCallback);
    //     }
    // });

    router.post(baseUrl, /*auth,*/ function (req, res, next) {
        console.log('got the post!');
        console.log(req.body);
        var labs = new Labs(req.body);

        labs.save(function (err, labs) {
            if (err) {
                return next(err);
            }

            res.json(labs);
        });
    });
}