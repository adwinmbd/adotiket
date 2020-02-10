// components/Notification.vue

<template>
  <div class="notification is-danger">{{ message }}</div>
</template>

<script>
export default {
  name: 'Notification',
  // eslint-disable-next-line
  props: ['message']
}
</script>
