<template>
  <div id="app" class="flex flex-col font-sans bg-grey-lightest text-grey-darkest min-h-screen">
    <app-header class="flex-no-shrink bg-blue-darker text-grey-lightest px-4 lg:px-6 py-4 shadow-md"/>
    <breadcrumb class="flex-no-shrink bg-white text-sm truncate px-4 lg:px-6 py-2 border-b"/>
    <div id="content" class="flex-1 p-4 lg:px-6">
      <router-view/>
    </div>
    <app-footer class="flex-no-shrink bg-grey-darker text-grey-lightest text-sm text-right px-4 lg:px-6 py-3 border-t border-grey-dark"/>
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
