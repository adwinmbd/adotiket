"use strict";

// const Mail = use('Mail')
const Validator = use("Validator");
const Ticket = use("App/Model/Ticket");
//const User = use("App/Models/User");
const Category = use("App/Model/Category");

class TicketController {
  /**
   * Display all tickets.
   */
  async index(response) {
    try {
      const tickets = await Ticket.all();
      const categories = await Category.all();

      if (tickets && categories) {
        return response.json({
          status: "success",
          tickets: tickets,
          categories: categories
        });
        // return [tickets, categories];
        // return { status: "success", tickets : tickets, categories : categories }
      }
    } catch (err) {
      console.log(err);
      return response.status(err.status).send(err);
    }
  }
  /**
   * Display all tickets by a user.
   */
  async userTickets({ request, response }) {
    const tickets = await Ticket.query()
      .where("user_id", request.currentUser.id)
      .fetch();
    const categories = await Category.all();

    return response.json({
      status: "success",
      tickets: tickets,
      categories: categories
    });
    // yield response.sendView('tickets.user_tickets', { tickets: tickets.toJSON(), categories: categories.toJSON() })
  }

  /**
   * Show the form for opening a new ticket.
   */
  async create({ request, response }) {
    const categories = await Category.pair("id", "name");
    return response.json({
      status: "success",
      categories: categories
    });
  }
  /**
   * Store a newly created ticket in database.
   */
  async store({ request, response }) {
    // const user = request.currentUser;
    // await User.findBy('email', 'foo@bar.com')
    const randomString = [...Array(12)]
      .map(i => (~~(Math.random() * 36)).toString(36).toUpperCase())
      .join("");

    // validate form input
    /*const validation = yield Validator.validateAll(request.all(), {
      title: "required",
      category: "required",
      priority: "required",
      message: "required"
    });*/

    // show error messages upon validation fail
    /*if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash();

      return response.redirect("back");
    }*/

    // persist ticket to database
    const ticket = await Ticket.create({
      title: request.input("title"),
      // user_id: user.id, // How to to get user from profile ?
      ticket_id: randomString,
      category_id: request.input("category"),
      priority: request.input("priority"),
      message: request.input("message"),
      status: "Open"
    });

    // Will throw an error because we haven't found the user yet !!!!
    // send mail notification
    await Mail.send("emails.ticket_info", { user, ticket }, message => {
      message.to(user.email, user.username);
      message.from("support@adotkt.com");
      message.subject(`[Ticket ID: ${ticket.ticket_id}] ${ticket.title}`);
    });

    /*await request
      .with({
        status: `A ticket with ID: #${ticket.ticket_id} has been opened.`
      })
      .flash();*/
    const message = `A ticket with ID: #${ticket.ticket_id} has been opened.`;
    return response.json({
      status: "success",
      message: message
    });

    // console.log(status)
    // response.redirect("back");
  }
  /**
   * Display a specified ticket.
   */
  async show({ request, response }) {
    const ticket = await Ticket.query()
      .where("ticket_id", request.param("ticket_id"))
      .with("user")
      .firstOrFail();
    const comments = await ticket
      .comments()
      .with("user")
      .fetch();
    const category = await ticket.category().fetch();

    return response.json({
      status: "success",
      ticket: ticket,
      comments: comments,
      category: category
    });
  }

  /**
   * Close the specified ticket.
   */
  async close({ request, response }) {
    const ticket = await Ticket.query()
      .where("ticket_id", request.param("ticket_id"))
      .firstOrFail();
    ticket.status = "Closed";
    await ticket.save();

    const ticketOwner = await ticket.user().fetch();

    // send email
    await Mail.send(
      "emails.ticket_status",
      { ticketOwner, ticket },
      message => {
        message.to(ticketOwner.email, ticketOwner.username);
        message.from("support@adotkt.com");
        message.subject(`RE: ${ticket.title} (Ticket ID: ${ticket.ticket_id})`);
      }
    );

    return response.json({
      status: "success",
      message: "The ticket has been closed"
    });
    //response.redirect("back");
  }
}

module.exports = TicketController;
