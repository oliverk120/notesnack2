'use strict';

exports.load = function(swagger, parms) {

  var searchParms = parms.searchableOptions;

  var list = {
    'spec': {
      description: 'Formula operations',
      path: '/formulas',
      method: 'GET',
      summary: 'Get all Formulas',
      notes: '',
      type: 'Formula',
      nickname: 'getFormulas',
      produces: ['application/json'],
      params: searchParms
    }
  };

  var create = {
    'spec': {
      description: 'Device operations',
      path: '/formulas',
      method: 'POST',
      summary: 'Create formula',
      notes: '',
      type: 'Formula',
      nickname: 'createFormula',
      produces: ['application/json'],
      parameters: [{
        name: 'body',
        description: 'Formula to create.  User will be inferred by the authenticated user.',
        required: true,
        type: 'Formula',
        paramType: 'body',
        allowMultiple: false
      }]
    }
  };

  swagger.addGet(list)
    .addPost(create);

};
