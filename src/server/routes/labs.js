//var express = require('express');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var mongoose = require('mongoose');

var Labs = mongoose.model('LabsModel');

var baseUrl = '/api/labs';

module.exports = function(router) {
    router.get(baseUrl, function (req, res, next) {
        var queryCallback = function (err, posts) {
            if (err) {
                return next(err);
            }

            res.json(posts);
        };

        if (req.query.author) {
            Post.find({'author': req.query.author}, queryCallback);
        } else {
            Post.find(queryCallback);
        }
    });

    router.post(baseUrl, auth, function (req, res, next) {
        console.log('got the post!');
        return;
        var labs = new Labs(req.body);
        //abs.author = req.payload.username;

        labs.save(function (err, labs) {
            if (err) {
                return next(err);
            }

            res.json(labs);
        });
    });
}