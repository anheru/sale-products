<template>
  <app-modal @hide="$emit('hide')">
    <form @submit.prevent="onSubmit">
      <p class="text-2xl font-semibold text-center mb-3">
        {{ itemId ? 'Editar' : 'Registrar' }} producto
      </p>

      <input-validate
        v-model="form.name"
        :errors="errors.name"
        type="text"
        placeholder="Nombre del producto"
        class="mb-4"
      />
      <input-validate
        v-model="form.price"
        :errors="errors.price"
        type="number"
        placeholder="Precio"
        class="mb-4"
      />
      <input-validate
        v-model="form.stock"
        :errors="errors.stock"
        type="number"
        placeholder="Stock"
        class="mb-4"
      />

      <div class="text-center">
        <button class="btn btn--success mx-2">
          Guardar
        </button>
        <button
          type="button"
          class="btn btn--danger mx-2"
          @click="$emit('hide')"
        >
          Cancelar
        </button>
      </div>
    </form>
  </app-modal>
</template>

<script>
import AppModal from '@/components/AppModal'
import InputValidate from '@/components/InputValidate'
import { mapGetters, mapActions } from 'vuex'
import Validator from 'validatorjs'

export default {
  components: {
    AppModal,
    InputValidate
  },

  props: {
    itemId: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    isValid: false,
    isLoading: false,
    form: {
      name: '',
      price: 1,
      stock: 0,
      imageUrl: ''
    },
    rules: {
      name: 'required',
      price: 'min:1',
      stock: 'min:0'
    },
    errors: {
      name: [],
      price: [],
      stock: []
    }
  }),

  computed: {
    ...mapGetters('items', ['getItemById'])
  },

  created () {
    if (this.itemId) this.form = { ...this.getItemById(this.itemId) }
  },

  methods: {
    ...mapActions('items', ['updateItem']),

    onValidate () {
      const validation = new Validator(this.form, this.rules)
      this.isValid = validation.passes()
      this.errors = { ...this.errors, ...validation.errors.all() }
    },

    async onSubmit () {
      this.onValidate()
      if (!this.isValid) return

      try {
        await this.updateItem({ ...this.form, slug: generateSlug(this.form.name) })
        this.$emit('hide')
      } catch (error) {
      }
    }
  }
}

function generateSlug (value) {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/-+/g, '-')
}
</script>
