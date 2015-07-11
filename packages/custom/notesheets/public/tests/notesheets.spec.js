'use strict';

(function() {
  describe('Test test case', function() {
    it('1 should be equals to 1', function() {
      expect(1).toBe(1);
    });
  });

  // Notesheets Controller Spec
  /*describe('MEAN controllers', function() {
    describe('NotesheetsController', function() {
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
        module('mean.notesheets');
      });

      // Initialize the controller and a mock scope
      var NotesheetsController,
        scope,
        $httpBackend,
        $stateParams,
        $location;

      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service but then attach it to a variable
      // with the same name as the service.
      beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

        scope = $rootScope.$new();

        NotesheetsController = $controller('NotesheetsController', {
          $scope: scope
        });

        $stateParams = _$stateParams_;

        $httpBackend = _$httpBackend_;

        $location = _$location_;

      }));

      it('$scope.find() should create an array with at least one notesheet object ' +
        'fetched from XHR', function() {

          // test expected GET request
          $httpBackend.expectGET('api\/notesheets').respond([{
            title: 'An Notesheet about MEAN',
            content: 'MEAN rocks!'
          }]);

          // run controller
          scope.find();
          $httpBackend.flush();

          // test scope value
          expect(scope.notesheets).toEqualData([{
            title: 'An Notesheet about MEAN',
            content: 'MEAN rocks!'
          }]);

        });

      it('$scope.findOne() should create an array with one notesheet object fetched ' +
        'from XHR using a notesheetId URL parameter', function() {
          // fixture URL parament
          $stateParams.notesheetId = '525a8422f6d0f87f0e407a33';

          // fixture response object
          var testNotesheetData = function() {
            return {
              title: 'An Notesheet about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // test expected GET request with response object
          $httpBackend.expectGET(/api\/notesheets\/([0-9a-fA-F]{24})$/).respond(testNotesheetData());

          // run controller
          scope.findOne();
          $httpBackend.flush();

          // test scope value
          expect(scope.notesheet).toEqualData(testNotesheetData());

        });

      it('$scope.create() with valid form data should send a POST request ' +
        'with the form input values and then ' +
        'locate to new object URL', function() {

          // fixture expected POST data
          var postNotesheetData = function() {
            return {
              title: 'An Notesheet about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // fixture expected response data
          var responseNotesheetData = function() {
            return {
              _id: '525cf20451979dea2c000001',
              title: 'An Notesheet about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // fixture mock form input values
          scope.title = 'An Notesheet about MEAN';
          scope.content = 'MEAN rocks!';

          // test post request is sent
          $httpBackend.expectPOST('api\/notesheets', postNotesheetData()).respond(responseNotesheetData());

          // Run controller
          scope.create(true);
          $httpBackend.flush();

          // test form input(s) are reset
          expect(scope.title).toEqual('');
          expect(scope.content).toEqual('');

          // test URL location to new object
          expect($location.path()).toBe('/notesheets/' + responseNotesheetData()._id);
        });

      it('$scope.update(true) should update a valid notesheet', inject(function(Notesheets) {

        // fixture rideshare
        var putNotesheetData = function() {
          return {
            _id: '525a8422f6d0f87f0e407a33',
            title: 'An Notesheet about MEAN',
            to: 'MEAN is great!'
          };
        };

        // mock notesheet object from form
        var notesheet = new Notesheets(putNotesheetData());

        // mock notesheet in scope
        scope.notesheet = notesheet;

        // test PUT happens correctly
        $httpBackend.expectPUT(/api\/notesheets\/([0-9a-fA-F]{24})$/).respond();

        // testing the body data is out for now until an idea for testing the dynamic updated array value is figured out
        //$httpBackend.expectPUT(/notesheets\/([0-9a-fA-F]{24})$/, putNotesheetData()).respond();
        [>
                Error: Expected PUT /notesheets\/([0-9a-fA-F]{24})$/ with different data
                EXPECTED: {"_id":"525a8422f6d0f87f0e407a33","title":"An Notesheet about MEAN","to":"MEAN is great!"}
                GOT:      {"_id":"525a8422f6d0f87f0e407a33","title":"An Notesheet about MEAN","to":"MEAN is great!","updated":[1383534772975]}
                <]

        // run controller
        scope.update(true);
        $httpBackend.flush();

        // test URL location to new object
        expect($location.path()).toBe('/notesheets/' + putNotesheetData()._id);

      }));

      it('$scope.remove() should send a DELETE request with a valid notesheetId ' +
        'and remove the notesheet from the scope', inject(function(Notesheets) {

          // fixture rideshare
          var notesheet = new Notesheets({
            _id: '525a8422f6d0f87f0e407a33'
          });

          // mock rideshares in scope
          scope.notesheets = [];
          scope.notesheets.push(notesheet);

          // test expected rideshare DELETE request
          $httpBackend.expectDELETE(/api\/notesheets\/([0-9a-fA-F]{24})$/).respond(204);

          // run controller
          scope.remove(notesheet);
          $httpBackend.flush();

          // test after successful delete URL location notesheets list
          //expect($location.path()).toBe('/notesheets');
          expect(scope.notesheets.length).toBe(0);

        }));
    });
  });*/
}());
