<template>
  <div id="app">
    <app-header/>
    <router-view id="content"/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style scoped>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#content {
  flex: 1;
  padding: 30px 20px;
}
</style>
