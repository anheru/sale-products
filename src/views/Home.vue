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
import firebase from 'firebase/app'
import 'firebase/database'
import AppItem from '@/components/AppItem'

export default {
  components: { AppItem },

  data: () => ({
    items: []
  }),

  created () {
    firebase
      .database()
      .ref('items')
      .once('value', (snapchat) => {
        let items = []
        snapchat.forEach((s) => { items = items.concat(s.val()) })
        this.items = items
      })
  }
}
</script>
