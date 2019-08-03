<template>
  <div id="app" class="flex min-h-screen flex-col">
    <TheHeader/>
    <router-view class="py-12 flex-auto container"/>
    <TheFooter/>
  </div>
</template>

<script>
// const TheHeader = () => import('@/components/TheHeader')
// const TheFooter = () => import('@/components/TheFooter')
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import { mapMutations } from 'vuex'

export default {
  components: {
    TheHeader,
    TheFooter
  },

  methods: {
    ...mapMutations('items',
      [
        'SET_ITEMS',
        'SET_LOADING'
      ]
    )
  },

  created () {
    this.SET_LOADING(true)
    firebase
      .database()
      .ref('items')
      .once('value', (snapchot) => {
        this.SET_ITEMS(snapchot.val())
        this.SET_LOADING(false)
      })
  }
}
</script>
