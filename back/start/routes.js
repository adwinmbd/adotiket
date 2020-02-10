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

/*Route.group(() => {
  Route.get("users", "UserController.show");
  Route.delete("users/:id", "UserController.destroy");
  Route.get("tickets/new", "TicketsController.index");
  Route.get("tickets/new", "TicketsController.store");
  Route.post("tickets/new", "TicketsController.store");
}).prefix("api");*/

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/
Route.group(() => {
  Route.get("users", "UserController.show");
  Route.delete("users/:id", "UserController.destroy");
}).prefix("api");

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/
/*
Route.get("register", "AuthController.showRegisterPage");
Route.post("register", "AuthController.register");
Route.get("login", "AuthController.showLoginPage");
Route.post("login", "AuthController.login");
Route.get("logout", "AuthController.logout");
*/
Route.group(() => {
  Route.post("login", "AuthController.login");
  Route.post("register", "AuthController.register");
  Route.get("profile", "AuthController.profile").middleware(["auth"]);
  // Route.get("logout", "AuthController.logout");
}).prefix("api");

/*
|--------------------------------------------------------------------------
| Tickets Routes
|--------------------------------------------------------------------------
*/
/*
Route.get("new_ticket", "TicketsController.create").middleware("auth");
Route.post("new_ticket", "TicketsController.store").middleware("auth");
Route.get("tickets/:ticket_id", "TicketsController.show").middleware("auth");
Route.get("my_tickets", "TicketsController.userTickets").middleware("auth");

Route.post("comment", "CommentsController.postComment");
*/

Route.group(() => {
  Route.get("tickets/new", "TicketsController.create");
  Route.post("tickets/new", "TicketsController.store");
  // Route.get("tickets/:ticket_id", "TicketsController.show").middleware("auth");
  Route.get("tickets/:ticket_id", "TicketsController.show");
  Route.get("tickets/user", "TicketsController.userTickets");
}).prefix("api");

/*
|--------------------------------------------------------------------------
| Admin Tickets Routes
|--------------------------------------------------------------------------
*/
/*
Route.group("admin", function() {
  Route.get("tickets", "TicketsController.index");
  Route.post("close_ticket/:ticket_id", "TicketsController.close");
})
  .prefix("admin")
  .middleware(["auth", "admin"]);
*/
