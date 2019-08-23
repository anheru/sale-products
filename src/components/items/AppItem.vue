<template>
  <router-link
    :to="{name: 'Product', params: { slug }}"
    class="flex flex-col border border-secondary"
  >
    <div class="flex-auto flex items-center py-1">
      <img
        :src="image"
        :alt="name"
      >
    </div>
    <div class="px-4 text-white bg-secondary py-2 w-full">
      <p class="text-lg">
        {{ name }}
      </p>
      <p class="text-sm">
        {{ price | currency }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    price: {
      type: [String, Number],
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
