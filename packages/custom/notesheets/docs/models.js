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
  Notesheet: {
    id: 'Notesheet',
    required: ['content'],
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the Notesheet'
      },
      title: {
        type: 'string',
        description: 'Title of the notesheet'
      },
      content: {
        type: 'string',
        description: 'content of the notesheet'
      },
      user: {
        type: 'User',
        description: 'User that created the notesheet'
      }

    }
  }
};
