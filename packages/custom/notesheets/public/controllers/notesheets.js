'use strict';

angular.module('mean.notesheets').controller('NotesheetsController', ['$scope', '$stateParams', '$location', 'Global', 'Notesheets', 'MeanUser', 'Circles',
  function($scope, $stateParams, $location, Global, Notesheets, MeanUser, Circles) {
    $scope.global = Global;

    $scope.hasAuthorization = function(notesheet) {
      if (!notesheet || !notesheet.user) return false;
      return MeanUser.isAdmin || notesheet.user._id === MeanUser.user._id;
    };

    $scope.availableCircles = [];

    Circles.mine(function(acl) {
        $scope.availableCircles = acl.allowed;
        $scope.allDescendants = acl.descendants;
    });

    $scope.showDescendants = function(permission) {
        var temp = $('.ui-select-container .btn-primary').text().split(' ');
        temp.shift(); //remove close icon
        var selected = temp.join(' ');
        $scope.descendants = $scope.allDescendants[selected];
    };

    $scope.selectPermission = function() {
        $scope.descendants = [];
    };

    $scope.create = function(isValid) {
      if (isValid) {
        // $scope.notesheet.permissions.push('test test');
        var notesheet = new Notesheets($scope.notesheet);

        notesheet.$save(function(response) {
          $location.path('notesheets/' + response._id);
        });

        $scope.notesheet = {};

      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(notesheet) {
      if (notesheet) {
        notesheet.$remove(function(response) {
          for (var i in $scope.notesheets) {
            if ($scope.notesheets[i] === notesheet) {
              $scope.notesheets.splice(i, 1);
            }
          }
          $location.path('notesheets');
        });
      } else {
        $scope.notesheet.$remove(function(response) {
          $location.path('notesheets');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var notesheet = $scope.notesheet;
        if (!notesheet.updated) {
          notesheet.updated = [];
        }
        notesheet.updated.push(new Date().getTime());

        notesheet.$update(function() {
          $location.path('notesheets/' + notesheet._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Notesheets.query(function(notesheets) {
        $scope.notesheets = notesheets;
      });
    };

    $scope.findOne = function() {
      Notesheets.get({
        notesheetId: $stateParams.notesheetId
      }, function(notesheet) {
        $scope.notesheet = notesheet;
      });
    };
  }
]);