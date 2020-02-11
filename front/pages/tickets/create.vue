<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-5 is-4-desktop">
          <div class="card-title">
            <h1>Open Ticket</h1>
          </div>
          <div>
            <form>
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
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option value="0">Select Priority:</option>
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
// import notifications one to be for error and the other status
// post url to tickets/new
// default first select to be Select Xxxx
// populate select from database
// priority : lo, mid, hi
export default {}
</script>
