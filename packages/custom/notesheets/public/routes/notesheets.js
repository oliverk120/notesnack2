'use strict';

angular.module('mean.notesheets').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('notesheets example page', {
      url: '/notesheets/example',
      templateUrl: 'notesheets/views/index.html'
    });
  }
]);
