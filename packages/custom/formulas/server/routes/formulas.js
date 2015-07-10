'use strict';

var formula = require('../controllers/formulas');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Formulas, app, auth, database) {
        app.route('/api/formulas/:formulaId')
            .get(formula.show)
            .put(formula.update)
            .delete(formula.destroy);

        // sample api route
        app.route('/api/formulas')
            .get(formula.all)
            .post(formula.create);
        // route to handle delete goes here (app.delete)

        app.param('formulaId', formula.formula);

};
