<template>
  <div id="app" class="flex min-h-screen flex-col">
    <TheHeader/>
    <router-view class="py-12 text-center flex-auto container"/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
