<template>
  <main>
    <article v-if="currentItem">
      <p>{{ currentItem.name }}</p>
      <img :src="currentItem.imageUrl" :alt="currentItem.name">
    </article>
    <app-loading v-else/>
  </main>

</template>

<script>
import AppLoading from '@/components/AppLoading'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { AppLoading },

  computed: {
    ...mapState({
      loading: s => s.loading
    }),

    ...mapGetters('items', ['getItemBySlug']),

    currentItem () {
      return this.getItemBySlug(this.$route.params.slug)
    }
  },

  watch: {
    loading (val) {
      if (!val && !this.currentItem) this.$router.replace('/')
    }
  }
}
</script>
