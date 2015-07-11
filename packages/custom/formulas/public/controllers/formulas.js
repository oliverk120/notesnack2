'use strict';

angular.module('mean.formulas').controller('FormulasController', ['$scope', '$stateParams', '$location', 'Global', 'Formulas', 'MeanUser', 'Circles',
  function($scope, $stateParams, $location, Global, Formulas, MeanUser, Circles) {
    $scope.global = Global;

    $scope.hasAuthorization = function(formula) {
      if (!formula || !formula.user) return false;
      return MeanUser.isAdmin || formula.user._id === MeanUser.user._id;
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
        // $scope.formula.permissions.push('test test');
        var formula = new Formulas($scope.formula);

        formula.$save(function(response) {
          $location.path('formulas/' + response._id);
        });

        $scope.formula = {};

      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(formula) {
      if (formula) {
        formula.$remove(function(response) {
          for (var i in $scope.formulas) {
            if ($scope.formulas[i] === formula) {
              $scope.formulas.splice(i, 1);
            }
          }
          $location.path('formulas');
        });
      } else {
        $scope.formula.$remove(function(response) {
          $location.path('formulas');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var formula = $scope.formula;
        if (!formula.updated) {
          formula.updated = [];
        }
        formula.updated.push(new Date().getTime());

        formula.$update(function() {
          $location.path('formulas/' + formula._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Formulas.query(function(formulas) {
        $scope.formulas = formulas;
      });
    };

    $scope.findOne = function() {
      Formulas.get({
        formulaId: $stateParams.formulaId
      }, function(formula) {
        $scope.formula = formula;
      });
    };
  }
]);