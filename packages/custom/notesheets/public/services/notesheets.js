'use strict';

//Notesheets service used for notesheets REST endpoint
angular.module('mean.notesheets').factory('Notesheets', ['$resource',
  function($resource) {
    return $resource('api/notesheets/:notesheetId', {
      notesheetId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
