<template>
  <main>
    <ul class="flex flex-wrap -mx-4 -my-3">
      <li
        v-for="item in items"
        :key="item.uid"
        class="w-1/4 px-4 my-3 flex"
      >
        <AppItem
          class="w-full"
          :name="item.name"
          :slug="item.slug"
          :price="item.price"
          :image="item.imageUrl"
        />
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState } from 'vuex'
const AppItem = () => import('@/components/AppItem')

export default {
  components: { AppItem },
  computed: {
    ...mapState(['items'])
  }
}
</script>
