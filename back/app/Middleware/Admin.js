"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  // async handle({ request, response }, next) {
  async handle({ response, auth }, next) {
    // Redirect to homepage if the currently authenticated user is not an admin
    // might throw an error because user is not found
    //if (request.currentUser.is_admin !== 1) {
    await auth.check();
    if (auth.user.is_admin !== 1) {
      // it will return hello world
      response.redirect("/");
      //return response.status(401).json()
    }
    // call next to advance the request
    await next();
  }
}

module.exports = Admin;
