'use strict';

angular.module('mean.formulas').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('formulas view', {
      url: '/formulas/:formulaId',
      templateUrl: 'formulas/views/view.html'
    })
    .state('formulas create page', {
      url: '/formulas/create',
      templateUrl: 'formulas/views/create.html'
    })
    .state('formulas home page', {
      url: '/formulas',
      templateUrl: 'formulas/views/index.html'
    })
    .state('formulas example page', {
      url: '/formulas/:formulaId/edit',
      templateUrl: 'formulas/views/edit.html'
    });
  }
]);
