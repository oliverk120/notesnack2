'use strict';

//Formulas service used for formulas REST endpoint
angular.module('mean.formulas').factory('Formulas', ['$resource',
  function($resource) {
    return $resource('api/formulas/:formulaId', {
      formulaId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
