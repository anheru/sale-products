<template>
  <transition name="fade">
    <div
      class="fixed inset-0 bg-black-50 flex items-center justify-center z-50"
      @click.self="$emit('hide')"
    >
      <div class="modal-content py-6 px-8 relative bg-white max-w-xs w-full sm:max-w-sm rounded-lg overflow-hidden">
        <div class="text-right">
          <button
            v-if="showClose"
            class="bg-red-600 text-white border inline-block px-1 leading-none text-2xl"
            @click="$emit('hide')"
          >
            ×
          </button>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showClose: {
      type: Boolean,
      default: false
    }
  }
}
</script>
