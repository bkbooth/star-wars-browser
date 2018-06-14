<template>
  <div id="app" class="font-sans bg-blue-lightest text-grey-darkest min-h-screen flex flex-col">
    <app-header/>
    <div id="content" class="flex-1 px-6 py-8">
      <breadcrumb/>
      <router-view/>
    </div>
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
