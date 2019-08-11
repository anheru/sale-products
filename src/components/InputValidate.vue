<template>
  <div>
    <label
      v-if="showLabel"
      class="form-label"
    >{{ $attrs.placeholder }}{{ $attrs.hasOwnProperty('required') ? '*' : '' }}</label>

    <input
      v-bind="$attrs"
      :value="value"
      @input="updateInput($event.target.value)"
      class="form-input"
    >

    <p
      v-for="(error, e) in errors"
      :key="e"
      class="form-error"
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
    errors: {
      type: Array,
      default: () => []
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
