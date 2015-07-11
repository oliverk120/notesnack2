'use strict';

//Setting up route
angular.module('mean.formulas').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all formulas', {
        url: '/formulas',
        templateUrl: '/formulas/views/list.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('create formula', {
        url: '/formulas/create',
        templateUrl: '/formulas/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('edit formula', {
        url: '/formulas/:formulaId/edit',
        templateUrl: '/formulas/views/edit.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('formula by id', {
        url: '/formulas/:formulaId',
        templateUrl: '/formulas/views/view.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      });
  }
]);
