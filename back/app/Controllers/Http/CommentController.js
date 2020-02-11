"use strict";
const Mail = use("Mail");
const Validator = use("Validator");
const Comment = use("App/Model/Comment");

class CommentController {
  /**
   * Persist comment and mail user
   */
  async postComment({ request, response }) {
    //const user = request.currentUser;

    // validate form input
    /**const validation = yield Validator.validateAll(request.all(), {
      comment: "required"
    });*/

    // show error messages upon validation fail
    /*if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash();

      return response.redirect("back");
    }*/

    // persist comment to database
    // will throw error because we haven't fetched the user
    const comment = await Comment.create({
      ticket_id: request.input("ticket_id"),
      user_id: user.id,
      comment: request.input("comment")
    });

    const commentTicket = await comment.ticket().fetch();
    const commentUser = await commentTicket.user().fetch();

    // send mail if the user commenting is not the ticket owner
    // will throw error because we haven't fetched the user
    if (commentUser.id != user.id) {
      await Mail.send(
        "emails.ticket-comments",
        { commentUser, user, commentTicket, comment },
        message => {
          message.to(commentUser.email, commentUser.username);
          message.from("support@adotkt.com");
          message.subject(
            `RE: ${commentTicket.title} (Ticket ID: ${commentTicket.ticket_id})`
          );
        }
      );
    }

    // yield request.with({ status: "Your comment has been submitted." }).flash();
    return response.json({
      status: "success",
      message: "Your comment has been submitted."
    });
    // response.redirect("back");
  }
}

module.exports = CommentController;
