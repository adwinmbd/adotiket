<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column is-10-tablet">
          <div class="card-title">
            <h1>#xxxx-xxxx</h1>
          </div>
          <div>
            <!-- class = "panel-body" ? | use cards | include alert & notify components -->
            <div>
              <!-- class = "ticket-info" -->
              <p>
                <!-- {{ ticket.message }}-->
                Ticket message
              </p>
              <p>
                Category :
                <!-- {{ category.name }}-->
              </p>
              <p>
                <!-- if ticket.status == 'open' -->
                Status:
                <span class="label label-success">
                  <!-- {{ ticket.status }}-->
                </span>
                <!-- else  Status: <span class="label label-danger">{{ ticket.status }}</span> -->
              </p>
              <p>
                Created on:
                <!--{{ ticket.created_at }}-->
              </p>
            </div>
            <hr />
            <div class="comments">
              <!--for comment in comments-->
              <div>
                <!-- class=panel panel-
                    'default' if ticket.user.id == comment.user_id else 'success'
                    use cards
                -->
                <div>
                  <!-- class = "panel panel-heading" | use cards-->
                  <!--{{comment.user.username}}-->
                  <span>
                    <!--class="pull-right"-->
                    Comment
                    <!--{{ comment.created_at }}-->
                  </span>
                </div>
                <div>
                  <!--class="panel panel-body" | use cards-->
                  <!--{{comment.comment}}-->
                </div>
              </div>
            </div>
            <div>
              <!--class="comment-form"-->
              <form>
                <!--post to='/comment' | hidden field : 'ticket_id', 'ticket.id'-->
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Message"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-dark is-fullwidth">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card-title {
  background-color: #ededed;
  padding: 1rem;
  margin-bottom: 0.5rem;
}
.card-title h1 {
  color: #000;
  text-align: center;
  font-size: 1.2rem;
}
</style>
<script>
// title #{{ ticket.ticket_id }} - {{ ticket.title }}

export default {}
</script>
