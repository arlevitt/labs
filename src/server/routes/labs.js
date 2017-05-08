var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

var mongoose = require('mongoose');

var Labs = mongoose.model('Labs');

var baseUrl = '/api/labs';

module.exports = function(router) {
    router.param('labs', function (req, res, next, id) {
        var query = Labs.findById(id);

        query.exec(function (err, labs) {
            if (err) {
                return next(err);
            }
            if (!labs) {
                return next(new Error('can\'t find labs'));
            }

            req.labs = labs;
            return next();
        });
    });

    router.get(baseUrl, function (req, res, next) {
        console.log('got the get all!')
        var queryCallback = function (err, labs) {
            if (err) {
                return next(err);
            }

            res.json(labs);
        };

        if (req.query.author) {
            Labs.find({'author': req.query.author}, queryCallback);
        } else {
            Labs.find(queryCallback);
        }
    });

    router.get(baseUrl + '/:labs', function (req, res, next) {
        console.log('got the get single!')
        //res.status(200).send('ok');
        console.log('param: ' + req.labs);
        res.json(req.labs);
    });

    router.post(baseUrl, /*auth,*/ function (req, res, next) {
        console.log('got the post!');
        console.log(req.body);
        var labs = new Labs(req.body);

        labs.save(function (err, labs) {
            if (err) {
                console.log(err);
                return next(err);
            }

            res.json(labs);
        });
    });

    router.put(baseUrl + '/:labs', /*auth,*/ function (req, res, next) {
        console.log('got the put!');
        console.log(req.body);

        Labs.findByIdAndUpdate(req.body._id, req.body, {new: true, upsert: true, setDefaultsOnInsert: true}, function (err, updatedLabs) {
            console.log(updatedLabs);
            if (err) {
                console.log(err);
                return next(err);
            }

            res.json(updatedLabs);
        });
    });
}