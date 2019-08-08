<template>
  <app-modal @hide="$emit('hide')">
    <form @submit.prevent="submit">
      <p class="text-2xl font-semibold text-center mb-3">{{ itemId ? 'Editar' : 'Registrar' }} producto</p>

      <input-validate
        v-model="form.name"
        :rule="rules.name"
        :error="errors.name"
        type="text"
        placeholder="Nombre del producto"
        class="mb-4"
      />
      <input-validate
        v-model="form.price"
        :rule="rules.price"
        :error="errors.price"
        type="number"
        placeholder="Precio"
        class="mb-4"
      />
      <input-validate
        v-model="form.stock"
        :rule="rules.stock"
        :error="errors.stock"
        type="number"
        placeholder="Stock"
        class="mb-4"
      />

      <div class="text-center">
        <button class="btn btn--success mx-2">Guardar</button>
        <button class="btn btn--danger mx-2">Cancelar</button>
      </div>
    </form>
  </app-modal>
</template>

<script>
import AppModal from '@/components/AppModal'
import InputValidate from '@/components/InputValidate'
import { mapGetters, mapActions } from 'vuex'

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
      price: 'required',
      stock: 'required'
    },
    errors: {
      name: '',
      price: '',
      stock: ''
    }
  }),

  computed: {
    ...mapGetters('items', ['getItemById'])
  },

  methods: {
    ...mapActions('items', ['updateItem']),

    async submit () {
      try {
        await this.updateItem({ ...this.form, slug: generateSlug(this.form.name) })
        this.$emit('hide')
      } catch (error) {
      }
    }
  },

  created () {
    if (this.itemId) this.form = { ...this.getItemById(this.itemId) }
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
