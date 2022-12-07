<script>
import Menu from './components/menu.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    'app-footer': Footer,
    'app-menu': Menu
  }
}

</script>

<template>
  <app-menu />

  <main>
    <router-view />
  </main>

  <app-footer />

</template>

<style scoped lang="scss">
main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
</style>
