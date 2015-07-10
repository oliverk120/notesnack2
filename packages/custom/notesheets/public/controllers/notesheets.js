'use strict';

/* jshint -W098 */
angular.module('mean.notesheets').controller('NotesheetsController', ['$scope', 'Global', 'Notesheets',
  function($scope, Global, Notesheets) {
    $scope.global = Global;
    $scope.package = {
      name: 'notesheets'
    };
  }
]);
