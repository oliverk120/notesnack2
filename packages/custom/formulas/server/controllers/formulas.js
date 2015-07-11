'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Formula = mongoose.model('Formula'),
    _ = require('lodash');

module.exports = function(Formulas) {

    return {
        /**
         * Find formula by id
         */
        formula: function(req, res, next, id) {
            Formula.load(id, function(err, formula) {
                if (err) return next(err);
                if (!formula) return next(new Error('Failed to load formula ' + id));
                req.formula = formula;
                next();
            });
        },
        /**
         * Create an formula
         */
        create: function(req, res) {
            var formula = new Formula(req.body);
            formula.user = req.user;

            formula.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the formula'
                    });
                }

                Formulas.events.publish('create', {
                    description: req.user.name + ' created ' + req.body.title + ' formula.'
                });

                res.json(formula);
            });
        },
        /**
         * Update an formula
         */
        update: function(req, res) {
            var formula = req.formula;

            formula = _.extend(formula, req.body);


            formula.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the formula'
                    });
                }

                Formulas.events.publish('update', {
                    description: req.user.name + ' updated ' + req.body.title + ' formula.'
                });

                res.json(formula);
            });
        },
        /**
         * Delete an formula
         */
        destroy: function(req, res) {
            var formula = req.formula;


            formula.remove(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the formula'
                    });
                }

                Formulas.events.publish('remove', {
                    description: req.user.name + ' deleted ' + formula.title + ' formula.'
                });

                res.json(formula);
            });
        },
        /**
         * Show an formula
         */
        show: function(req, res) {

            Formulas.events.publish('view', {
                description: req.user.name + ' read ' + req.formula.title + ' formula.'
            });

            res.json(req.formula);
        },
        /**
         * List of Formulas
         */
        all: function(req, res) {
            var query = req.acl.query('Formula');

            query.find({}).sort('-created').populate('user', 'name username').exec(function(err, formulas) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the formulas'
                    });
                }

                res.json(formulas)
            });

        }
    };
}