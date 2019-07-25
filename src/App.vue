<template>
  <div id="app" class="flex flex-col font-sans bg-gray-100 text-gray-800 min-h-screen">
    <app-header class="flex-shrink-0 bg-blue-900 text-gray-200 px-4 lg:px-6 py-4 shadow-md z-10" />
    <breadcrumb class="flex-shrink-0 bg-white text-sm truncate px-4 lg:px-6 py-2 border-b" />
    <portal-target name="hero" class="flex-shrink-0" slim />
    <router-view class="flex-1 px-4 lg:px-6" />
    <app-footer class="flex-shrink-0 bg-gray-700 text-gray-200 text-sm text-right px-4 lg:px-6 py-3" />
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
