'use strict';

// Notesheet authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && !req.notesheet.user._id.equals(req.user._id)) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

var hasPermissions = function(req, res, next) {

    req.body.permissions = req.body.permissions || ['authenticated'];

    req.body.permissions.forEach(function(permission) {
        if (req.acl.user.allowed.indexOf(permission) === -1) {
            return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
        };
    });

    next();
};

module.exports = function(Notesheets, app, auth) {
  
  var notesheets = require('../controllers/notesheets')(Notesheets);

  app.route('/api/notesheets')
    .get(notesheets.all)
    .post(auth.requiresLogin, hasPermissions, notesheets.create);
  app.route('/api/notesheets/:notesheetId')
    .get(auth.isMongoId, notesheets.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, notesheets.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, notesheets.destroy);

  // Finish with setting up the notesheetId param
  app.param('notesheetId', notesheets.notesheet);
};
