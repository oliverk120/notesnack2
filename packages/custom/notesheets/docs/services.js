'use strict';

exports.load = function(swagger, parms) {

  var searchParms = parms.searchableOptions;

  var list = {
    'spec': {
      description: 'Notesheet operations',
      path: '/notesheets',
      method: 'GET',
      summary: 'Get all Notesheets',
      notes: '',
      type: 'Notesheet',
      nickname: 'getNotesheets',
      produces: ['application/json'],
      params: searchParms
    }
  };

  var create = {
    'spec': {
      description: 'Device operations',
      path: '/notesheets',
      method: 'POST',
      summary: 'Create notesheet',
      notes: '',
      type: 'Notesheet',
      nickname: 'createNotesheet',
      produces: ['application/json'],
      parameters: [{
        name: 'body',
        description: 'Notesheet to create.  User will be inferred by the authenticated user.',
        required: true,
        type: 'Notesheet',
        paramType: 'body',
        allowMultiple: false
      }]
    }
  };

  swagger.addGet(list)
    .addPost(create);

};
