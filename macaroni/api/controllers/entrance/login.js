module.exports = {


  friendlyName: 'Login',


  description: 'Login entrance.',


  inputs: {

    email: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },

    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: true
    },

  },


  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged in.',
    }

  },


  fn: async function (inputs) {

    return inputs;

  }


};
