"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Ticket extends Model {
  /**
   * A ticket belongs to a category
   */
  category() {
    return this.belongsTo("App/Model/Category");
  }

  /**
   * A ticket can have many comments
   */
  comments() {
    return this.hasMany("App/Model/Comment");
  }

  /**
   * A ticket belongs to a user
   */
  user() {
    return this.belongsTo("App/Model/User");
  }
}

module.exports = Ticket;
