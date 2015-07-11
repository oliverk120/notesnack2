'use strict';

(function() {
  describe('Test test case', function() {
    it('1 should be equals to 1', function() {
      expect(1).toBe(1);
    });
  });

  // Formulas Controller Spec
  /*describe('MEAN controllers', function() {
    describe('FormulasController', function() {
      // The $resource service augments the response object with methods for updating and deleting the resource.
      // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
      // the responses exactly. To solve the problem, we use a newly-defined toEqualData Jasmine matcher.
      // When the toEqualData matcher compares two objects, it takes only object properties into
      // account and ignores methods.
      beforeEach(function() {
        jasmine.addMatchers({
          toEqualData: function() {
            return {
              compare: function(actual, expected) {
                return {
                  pass: angular.equals(actual, expected)
                };
              }
            };
          }
        });
      });

      beforeEach(function() {
        module('mean');
        module('mean.system');
        module('mean.formulas');
      });

      // Initialize the controller and a mock scope
      var FormulasController,
        scope,
        $httpBackend,
        $stateParams,
        $location;

      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service but then attach it to a variable
      // with the same name as the service.
      beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

        scope = $rootScope.$new();

        FormulasController = $controller('FormulasController', {
          $scope: scope
        });

        $stateParams = _$stateParams_;

        $httpBackend = _$httpBackend_;

        $location = _$location_;

      }));

      it('$scope.find() should create an array with at least one formula object ' +
        'fetched from XHR', function() {

          // test expected GET request
          $httpBackend.expectGET('api\/formulas').respond([{
            title: 'An Formula about MEAN',
            content: 'MEAN rocks!'
          }]);

          // run controller
          scope.find();
          $httpBackend.flush();

          // test scope value
          expect(scope.formulas).toEqualData([{
            title: 'An Formula about MEAN',
            content: 'MEAN rocks!'
          }]);

        });

      it('$scope.findOne() should create an array with one formula object fetched ' +
        'from XHR using a formulaId URL parameter', function() {
          // fixture URL parament
          $stateParams.formulaId = '525a8422f6d0f87f0e407a33';

          // fixture response object
          var testFormulaData = function() {
            return {
              title: 'An Formula about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // test expected GET request with response object
          $httpBackend.expectGET(/api\/formulas\/([0-9a-fA-F]{24})$/).respond(testFormulaData());

          // run controller
          scope.findOne();
          $httpBackend.flush();

          // test scope value
          expect(scope.formula).toEqualData(testFormulaData());

        });

      it('$scope.create() with valid form data should send a POST request ' +
        'with the form input values and then ' +
        'locate to new object URL', function() {

          // fixture expected POST data
          var postFormulaData = function() {
            return {
              title: 'An Formula about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // fixture expected response data
          var responseFormulaData = function() {
            return {
              _id: '525cf20451979dea2c000001',
              title: 'An Formula about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // fixture mock form input values
          scope.title = 'An Formula about MEAN';
          scope.content = 'MEAN rocks!';

          // test post request is sent
          $httpBackend.expectPOST('api\/formulas', postFormulaData()).respond(responseFormulaData());

          // Run controller
          scope.create(true);
          $httpBackend.flush();

          // test form input(s) are reset
          expect(scope.title).toEqual('');
          expect(scope.content).toEqual('');

          // test URL location to new object
          expect($location.path()).toBe('/formulas/' + responseFormulaData()._id);
        });

      it('$scope.update(true) should update a valid formula', inject(function(Formulas) {

        // fixture rideshare
        var putFormulaData = function() {
          return {
            _id: '525a8422f6d0f87f0e407a33',
            title: 'An Formula about MEAN',
            to: 'MEAN is great!'
          };
        };

        // mock formula object from form
        var formula = new Formulas(putFormulaData());

        // mock formula in scope
        scope.formula = formula;

        // test PUT happens correctly
        $httpBackend.expectPUT(/api\/formulas\/([0-9a-fA-F]{24})$/).respond();

        // testing the body data is out for now until an idea for testing the dynamic updated array value is figured out
        //$httpBackend.expectPUT(/formulas\/([0-9a-fA-F]{24})$/, putFormulaData()).respond();
        [>
                Error: Expected PUT /formulas\/([0-9a-fA-F]{24})$/ with different data
                EXPECTED: {"_id":"525a8422f6d0f87f0e407a33","title":"An Formula about MEAN","to":"MEAN is great!"}
                GOT:      {"_id":"525a8422f6d0f87f0e407a33","title":"An Formula about MEAN","to":"MEAN is great!","updated":[1383534772975]}
                <]

        // run controller
        scope.update(true);
        $httpBackend.flush();

        // test URL location to new object
        expect($location.path()).toBe('/formulas/' + putFormulaData()._id);

      }));

      it('$scope.remove() should send a DELETE request with a valid formulaId ' +
        'and remove the formula from the scope', inject(function(Formulas) {

          // fixture rideshare
          var formula = new Formulas({
            _id: '525a8422f6d0f87f0e407a33'
          });

          // mock rideshares in scope
          scope.formulas = [];
          scope.formulas.push(formula);

          // test expected rideshare DELETE request
          $httpBackend.expectDELETE(/api\/formulas\/([0-9a-fA-F]{24})$/).respond(204);

          // run controller
          scope.remove(formula);
          $httpBackend.flush();

          // test after successful delete URL location formulas list
          //expect($location.path()).toBe('/formulas');
          expect(scope.formulas.length).toBe(0);

        }));
    });
  });*/
}());
