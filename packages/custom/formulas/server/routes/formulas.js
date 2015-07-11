'use strict';

// Formula authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && !req.formula.user._id.equals(req.user._id)) {
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

module.exports = function(Formulas, app, auth) {
  
  var formulas = require('../controllers/formulas')(Formulas);

  app.route('/api/formulas')
    .get(formulas.all)
    .post(auth.requiresLogin, hasPermissions, formulas.create);
  app.route('/api/formulas/:formulaId')
    .get(auth.isMongoId, formulas.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, formulas.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, formulas.destroy);

  // Finish with setting up the formulaId param
  app.param('formulaId', formulas.formula);
};
