<template>
  <div id="app" class="flex flex-col font-sans bg-grey-lightest text-grey-darkest min-h-screen">
    <app-header class="flex-no-shrink bg-blue-darker text-grey-lighter px-4 lg:px-6 py-4 shadow-md z-10" />
    <breadcrumb class="flex-no-shrink bg-white text-sm truncate px-4 lg:px-6 py-2 border-b" />
    <portal-target name="hero" class="flex-no-shrink" slim />
    <router-view class="flex-1 px-4 lg:px-6" />
    <app-footer class="flex-no-shrink bg-grey-darker text-grey-light text-sm text-right px-4 lg:px-6 py-3" />
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
