<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <component :is="layout">
    <router-view/>
    </component>
  </div>
</template>
<script>
import AuthLayout from './layouts/AuthLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  },
  components: {
    AuthLayout, MainLayout
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
</style>
