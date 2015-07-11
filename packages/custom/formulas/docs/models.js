exports.models = {

  User: {
    id: 'User',
    required: ['name', 'email', 'username'],
    properties: {
      name: {
        type: 'string',
        description: 'Name of the user'
      },
      email: {
        type: 'string',
        description: 'Email used for authentication and notifications'
      },
      phone: {
        type: 'string',
        description: 'Phone number of the user'
      }

    }
  },
  Formula: {
    id: 'Formula',
    required: ['content'],
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the Formula'
      },
      title: {
        type: 'string',
        description: 'Title of the formula'
      },
      content: {
        type: 'string',
        description: 'content of the formula'
      },
      user: {
        type: 'User',
        description: 'User that created the formula'
      }

    }
  }
};
