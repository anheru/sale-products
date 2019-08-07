<template>
  <div id="app" class="flex min-h-screen flex-col">
    <TheHeader/>
    <router-view class="py-12 flex-auto container"/>
    <TheFooter/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
const TheHeader = () => import(/* webpackChunkName: "header" */ '@/components/TheHeader')
const TheFooter = () => import(/* webpackChunkName: "footer" */ '@/components/TheFooter')

export default {
  components: {
    TheHeader,
    TheFooter
  },

  methods: {
    ...mapActions('items', ['loadItems'])
  },

  beforeMount () {
    this.loadItems()
  }
}
</script>
