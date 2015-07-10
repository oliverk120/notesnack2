'use strict';

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
