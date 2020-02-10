"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.group(() => {
  Route.get("users", "UserController.show");
  Route.delete("users/:id", "UserController.destroy");
  Route.post("login", "AuthController.login");
  Route.get("tickets/new", "TicketsController.index");
  Route.get("tickets/new", "TicketsController.store");
  Route.post("tickets/new", "TicketsController.store");
  // Route.get("logout", "AuthController.logout");
  Route.post("register", "AuthController.register");
  Route.get("profile", "AuthController.profile").middleware(["auth"]);
}).prefix("api");
