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
Formulas.register(function(app, auth, database, circles, swagger) {

  //We enable routing. By default the Package Object is passed to the routes
  Formulas.routes(app, auth, database);

  Formulas.aggregateAsset('css', 'formulas.css');
  Formulas.aggregateAsset('css', 'jqmath.css');
  Formulas.aggregateAsset('js', 'jqmath.js');
  Formulas.aggregateAsset('js', 'packery.js');
  
  //We are adding a link to the main menu for all authenticated users
  Formulas.menus.add({
    'roles': ['authenticated'],
    'title': 'Formulas',
    'link': 'all formulas'
  });
  Formulas.menus.add({
    'roles': ['authenticated'],
    'title': 'Create New Formula',
    'link': 'create formula'
  });

  Formulas.events.design({
    //http://fontawesome.io/icons
    icon: 'fa-file-text',
    color: '#8FD5FF'
  });


  /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Formulas.settings({'someSetting':'some value'},function (err, settings) {
      //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Formulas.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settings
    Formulas.settings(function (err, settings) {
      //you now have the settings object
    });
    */

  // Only use swagger.add if /docs and the corresponding files exists
  swagger.add(__dirname);
	
  return Formulas;
});
