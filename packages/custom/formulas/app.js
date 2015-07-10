'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Formulas = new Module('formulas');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Formulas.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Formulas.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Formulas.menus.add({
    title: 'formulas example page',
    link: 'formulas example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Formulas.aggregateAsset('css', 'formulas.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Formulas.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Formulas.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Formulas.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Formulas;
});
