<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-5 is-4-desktop">
          <div class="card-title">
            <h1>Open Ticket</h1>
          </div>
          <div>
            <!--
              class="panel-body"
              use cards
              <Alert v-if="error" :message="error" />
              <Notify v-if="success" :message="success" />
            -->
            <form>
              <!--post to='tickets/new'-->
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Title" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select" size="4">
                    <select>
                      <option value="0">Select Category:</option>
                      <!--select title category? data= categories default=null ?-->
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option value="0">Select Priority:</option>
                      <!--select title priority? data=low: 'Low', medium : 'Medium', high: 'High' default=null ?-->
                    </select>
                  </div>
                </div>
              </div>
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
                  <button class="button is-dark is-fullwidth">
                    Open Ticket
                  </button>
                </div>
              </div>
            </form>
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
// default first select to be Select Xxxx
// populate select from database
export default {}
</script>
