// pages/index.vue

<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-5 is-4-desktop">
          <div class="card-title">
            <h1>Adotkt</h1>
          </div>
          <div>
            <p>Welcome!</p>
            <!--See all <a href="/admin/tickets">tickets</a>-->
            <p>
              <!--If user is admin-->
              See all
              <a href="#">tickets</a>
            </p>
            <!--else-->
            <p>
              <!--See all your <a href="/my_tickets">tickets</a> or <a href="/new_ticket">open new ticket</a>-->
              See all your
              <a href="#">tickets</a> or
              <a href="#">open new ticket</a>
            </p>
            <!--endif-->
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
// distinguish between admin and normal user
// app/Listeners/Http.js

/**
 * Handle exception thrown when unable to authenticate the request
 */
/*if (error.name === 'InvalidLoginException') {
    yield response.sendView('auth.login')
    return
}*/
export default {}
</script>