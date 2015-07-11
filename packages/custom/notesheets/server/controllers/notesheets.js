'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Notesheet = mongoose.model('Notesheet'),
    _ = require('lodash');

module.exports = function(Notesheets) {

    return {
        /**
         * Find notesheet by id
         */
        notesheet: function(req, res, next, id) {
            Notesheet.load(id, function(err, notesheet) {
                if (err) return next(err);
                if (!notesheet) return next(new Error('Failed to load notesheet ' + id));
                req.notesheet = notesheet;
                next();
            });
        },
        /**
         * Create an notesheet
         */
        create: function(req, res) {
            var notesheet = new Notesheet(req.body);
            notesheet.user = req.user;

            notesheet.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the notesheet'
                    });
                }

                Notesheets.events.publish('create', {
                    description: req.user.name + ' created ' + req.body.title + ' notesheet.'
                });

                res.json(notesheet);
            });
        },
        /**
         * Update an notesheet
         */
        update: function(req, res) {
            var notesheet = req.notesheet;

            notesheet = _.extend(notesheet, req.body);


            notesheet.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the notesheet'
                    });
                }

                Notesheets.events.publish('update', {
                    description: req.user.name + ' updated ' + req.body.title + ' notesheet.'
                });

                res.json(notesheet);
            });
        },
        /**
         * Delete an notesheet
         */
        destroy: function(req, res) {
            var notesheet = req.notesheet;


            notesheet.remove(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the notesheet'
                    });
                }

                Notesheets.events.publish('remove', {
                    description: req.user.name + ' deleted ' + notesheet.title + ' notesheet.'
                });

                res.json(notesheet);
            });
        },
        /**
         * Show an notesheet
         */
        show: function(req, res) {

            Notesheets.events.publish('view', {
                description: req.user.name + ' read ' + req.notesheet.title + ' notesheet.'
            });

            res.json(req.notesheet);
        },
        /**
         * List of Notesheets
         */
        all: function(req, res) {
            var query = req.acl.query('Notesheet');

            query.find({}).sort('-created').populate('user', 'name username').exec(function(err, notesheets) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the notesheets'
                    });
                }

                res.json(notesheets)
            });

        }
    };
}