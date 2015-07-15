'use strict';

angular.module('mean.notesheets').directive('workspace', ['$rootScope', function($rootScope) {
    return {
      constrain: 'A',
      controller: function($scope, $element) {
        $scope.packery = new Packery($element[0], {
          itemSelector: '.module',
        });
        $('#arrange').prop("disabled", false).click(function(){
          $scope.packery.layout();
        });
        
      },
      link: function($scope, element, attrs) {
        element.ready(function() {
          $scope.packery.layout();
        });

      }
    };
  }]);