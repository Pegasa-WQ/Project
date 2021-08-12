<template>
  <div class="app-main-layout">

  <NavBar />

    <main class="app-content">
      <Sidebar />
      <div class="app-page">
      <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/Projects/Navbar.vue'
import Sidebar from '../components/Projects/Sidebar.vue'

export default {
  name: 'main-layout',
  components: {
    NavBar, Sidebar
  }
}
</script>
<style lang="scss">
.app-content {
display: flex;
}
.app-page {
padding: 100px 50px;
width: 100%;
box-shadow: 0 0 12px rgb(207 207 207 / 50%)
}
</style>
