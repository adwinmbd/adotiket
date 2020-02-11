// components/Alert.vue

<template>
  <div class="notification is-danger">{{ message }}</div>
</template>

<script>
export default {
  name: 'Alert',
  // eslint-disable-next-line
  props: ['message']
}
</script>
