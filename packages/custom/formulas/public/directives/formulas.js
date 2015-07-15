'use strict';

angular.module('mean.formulas').directive('nsformula', [function() {
    return {
      //require: '^workspace',
      template: '<div class="module" ng-class="{moduleBorder:editable}" id="{{item.id}}"><span class="close" ng-class="{hidden:!editable}" ng-click="remove(item)">&times;</span><div class="title"><a href="formula/{{item._id}}">{{item.title}}</a></div><div class=""> {{item.content}}</div></div>',
      link: function($scope, element, attributes, workspace) {
        $scope.packery.appended(element[0]);
        element.ready(function() {
          jQuery.getScript("/formulas/assets/js/jqmath.js");
          $scope.packery.layout();
        });
        $scope.remove = function(item) {
          var index = $scope.sheetData.indexOf(item);
          if (index != -1) {
            $scope.packery.remove(item);
            $scope.sheetData.splice(index, 1);          
          } else {
            console.log('already removed');
          }
        }
      }
    };
  }]).directive('formulalink', [function() {
    return {
      template: '<a href="" ng-click="appendItem(item)" ng-class="isInNoteSheet(item)"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp{{item.title}}</a>',
    }
  }]);

  