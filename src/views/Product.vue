<template>
  <main class="container flex items-center">
    <article
      v-if="currentItem"
      class="md:flex w-full"
    >
      <div class="w-full md:w-1/2">
        <img
          class="lg:w-3/5 mx-auto"
          :src="currentItem.imageUrl"
          :alt="currentItem.name"
        >
      </div>

      <div class="w-full md:w-1/2">
        <p class="text-3xl text-secondary font-semibold">
          {{ currentItem.name }}
        </p>
        <p class="text-xl">
          Precio: {{ currentItem.price | currency }}
        </p>
      </div>
    </article>
    <app-loading v-else />
  </main>
</template>

<script>
import AppLoading from '@/components/AppLoading'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { AppLoading },

  computed: {
    ...mapState({
      loading: s => s.items.loading
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
