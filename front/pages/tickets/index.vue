<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column is-10-tablet">
          <div class="card-title">
            <h1>Tickets</h1>
          </div>
          <div>
            <!-- 
              class='panel-body'
              use cards
              if tickets.length == 0 | display <p>There are currently no tickets</p> 
              else display table
            -->
            <table class="table is-bordered is-striped is-hoverable">
              <!-- is-fullwidth ? -->
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <!--<th style="text-align:center" colspan="2">Actions</th>-->
                  <th style="text-align:center" colspan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <!-- for ticket in tickets -->
                <tr>
                  <td>
                    <!-- for category in categories -->
                    <!-- if category.id === ticket.category_id -->
                    <!-- {{category.name}} -->
                    Technical
                    <!-- endif -->
                    <!-- endfor -->
                  </td>
                  <td>
                    <!-- 
                      <a href='tickets/{{ticket.ticket_id}}'>
                        #{{ticket.ticket_id}} - {{ticket.title}}
                      </a>
                    -->
                    #AZ8DZ8DDFIJFS - Sample Title 1
                  </td>
                  <td>
                    <!-- 
                      if ticket.status == 'Open'
                        <span class="label label-success">{{ ticket.status }}</span>
                      else
                        <span class="label label-danger">{{ ticket.status }}</span>
                      endif
                    -->
                    Open
                  </td>
                  <td>
                    <!-- {{ticket.updated_at}} -->
                    2020-02-11
                  </td>
                  <td>
                    <div class="field is-grouped">
                      <p class="control">
                        <!--<a href="/tickets/{{ ticket.ticket_id }}" class="button is-primary">Comment</a>-->
                        <a href="#" class="button is-primary">Comment</a>
                      </p>
                      <form action class="control">
                        <input type="submit" class="button is-danger" value="Close" />
                      </form>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Sales</td>
                  <td>#XY3TB8NQF4J6S-Sample Title 2</td>
                  <td>Open</td>
                  <td>2020-02-11</td>
                  <td>
                    <div class="field is-grouped">
                      <p class="control">
                        <!--<a href="/tickets/{{ ticket.ticket_id }}" class="button is-primary">Comment</a>-->
                        <a href="#" class="button is-primary">Comment</a>
                      </p>
                      <form action class="control">
                        <input type="submit" class="button is-danger" value="Close" />
                      </form>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Technical</td>
                  <td>#VR5LZ8DH6F9-Sample Title 3</td>
                  <td>Open</td>
                  <td>2020-02-11</td>
                  <td>
                    <div class="field is-grouped">
                      <p class="control">
                        <!--<a href="/tickets/{{ ticket.ticket_id }}" class="button is-primary">Comment</a>-->
                        <a href="#" class="button is-primary">Comment</a>
                      </p>
                      <form action class="control">
                        <input type="submit" class="button is-danger" value="Close" />
                      </form>
                    </div>
                  </td>
                </tr>
                <!-- endfor -->
              </tbody>
            </table>
            <!-- endif -->
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
// if tickets.length == 0 display you haven't created any tickets | display tickets otherwise
// outside for tickets in tickets | inner for categories in categories | display results
// each ticket to lead to tickets/ticket_id
// # {{ticket.ticket._id}} - {{ticket.title}}
export default {}
</script>
