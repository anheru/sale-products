<template>
  <div>
    <label v-if="showLabel">{{ $attrs.placeholder }}</label>

    <input
      v-bind="$attrs"
      :value="value"
      @input="updateInput($event.target.value)"
      class="block px-4 py-2 w-full border border-grey"
    >

    <p
      v-if="error"
      class="block text-red-100 mt-1 text-sm"
    >{{ error }}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    showLabel: {
      type: Boolean,
      default: true
    },
    error: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    updateInput (value) {
      if (this.$attrs.type === 'number') {
        this.$emit('input', Number(value))
      } else {
        this.$emit('input', value)
      }
    }
  }
}
</script>
