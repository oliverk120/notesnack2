
angular.module('mean.formulas').controller('FormulasController', ['$scope', '$location','$stateParams', 'Formulas', function($scope, $location, $stateParams, Formulas) {
  var formulaId = 1;

  $scope.find = function() {
      Formulas.query(function(formulas) {
        $scope.formulas = formulas;
    });
  };

  $scope.findOne = function(){
    console.log($stateParams);
    Formulas.get({
        formulaId: $stateParams.formulaId
      }, function(formula) {
        $scope.formula = formula;
      });
  };
  

  $scope.create = function(){
    var formula = {
      title: this.title,
      content: this.content
    };
    Formulas.create(formula)
    .success(function(data){
      $scope.title = '', 
      $scope.content = '';
      $location.path('/notesheets');
    })
    .error(function(data){
      console.log('Error: ' + data);
    });
  }

 $scope.delete = function(){
   Formulas.delete(formulaId);
   $scope.formula = {};
   $location.path('/notesheets');
 }

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


    // pagination settings  
    $scope.currentPage = 1;
    $scope.numPerPage = 10;

    ///Pagination Functions
    $scope.pagination = function(){
      this.fun = function(){
        console.log('wurs');
      }
    }

    $scope.selectPage = function(page, evt) {
      if ( $scope.page !== page && page > 0 && page <= $scope.totalPages) {
        if (evt && evt.target) {
          evt.target.blur();
        }
      }
      $scope.setPage(page);
    };

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;
      if($scope.formulas.length > 0){
        $scope.filteredFormulas = $scope.formulas.slice(begin, end);
      }
    };

    $scope.onFocus = function(){
      //allows you to search all formulas, not just the ones on the current pagination page
      $scope.filteredData = $scope.formulas;
    }

    $scope.outFocus = function(){
      //limits the formulas shown to the current pagination page
      $scope.searchText = '';
      $scope.setPage($scope.currentPage);
    }
  }]);
