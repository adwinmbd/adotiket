<template>
  <body>
    <div class="flex-center position-ref full-height">
      <div class="code">404</div>

      <div class="message" style="padding: 0.6rem;">Not Found</div>
    </div>
  </body>
</template>

<script>
export default {}
</script>

<style>
body {
  color: #636b6f;
  font-family: sans-serif;
  font-weight: 100;
  height: 100vh;
  margin: 0;
}
.full-height {
  height: 100vh;
}
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}
.position-ref {
  position: relative;
}
.code {
  border-right: 0.1rem solid;
  font-size: 1.7rem;
  padding: 0 1rem 0 1rem;
  text-align: center;
}
.message {
  font-size: 1.1rem;
  text-align: center;
}
</style>
