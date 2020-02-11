// components/Notify.vue

<template>
  <div class="notification is-success">{{ message }}</div>
</template>

<script>
export default {
  name: 'Notify',
  // eslint-disable-next-line
  props: ['message']
}
</script>
