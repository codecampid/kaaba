/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'GET /': { action: 'home' },
  'GET /subscription/plan': { action: 'subscription/plan' },
  'GET /login': { action: 'entrance/view-login' },
  'POST /entrance/login': { action: 'entrance/login' },

};
