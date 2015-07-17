'use strict';

//Setting up route
angular.module('mean.notesheets').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all notesheets', {
        url: '/notesheets',
        templateUrl: '/notesheets/views/list.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('create notesheet', {
        url: '/notesheets/create',
        templateUrl: '/notesheets/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('edit notesheet', {
        url: '/notesheets/:notesheetId/edit',
        templateUrl: '/notesheets/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('notesheet by id', {
        url: '/notesheets/:notesheetId',
        templateUrl: '/notesheets/views/view.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      });
  }
]);
