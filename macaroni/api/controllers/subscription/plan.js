module.exports = {


  friendlyName: 'Subscription Plan',


  description: 'Choose your preferred subscription plan easily with reasonable price.',


  exits: {

    success: {
      viewTemplatePath: 'pages/subscription/plan'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
