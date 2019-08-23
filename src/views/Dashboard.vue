<template>
  <main class="container">
    <section class="">
      <button
        class="btn btn--info mb-3"
        @click="showModalItem()"
      >
        Agregar producto
      </button>

      <ul class="flex flex-wrap -mx-3">
        <li
          v-for="item in items"
          :key="item.id"
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 py-2"
        >
          <admin-item
            :item="item"
            @edit="showModalItem"
            @delete="showModalDelete"
          />
        </li>
      </ul>
    </section>

    <modal-item
      v-if="isShowModalItem"
      :item-id="selectedId"
      @hide="isShowModalItem = false"
    />

    <app-modal
      v-if="isShowModalDelete"
      @hide="isShowModalDelete = false"
    >
      <div class="text-center">
        <p class="text-2xl font-semibold mb-4 text-grey-darker">
          ¿Está seguro de eliminar el producto?
        </p>
        <button
          class="btn btn--info mx-2"
          @click="submit"
        >
          Confirmar
        </button>
        <button
          class="btn btn--danger mx-2"
          @click="isShowModalDelete = false"
        >
          Cancelar
        </button>
      </div>
    </app-modal>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ModalItem from '@/components/items/ModalItem'
import AdminItem from '@/components/items/AdminItem'
import AppModal from '@/components/AppModal'

export default {
  components: {
    ModalItem,
    AppModal,
    AdminItem
  },

  data: () => ({
    isShowModalItem: false,
    isShowModalDelete: false,
    selectedId: null
  }),

  computed: {
    ...mapState({
      items: s => s.items.all
    })
  },

  methods: {
    ...mapActions('items', ['deleteItem']),

    showModalItem (id) {
      this.selectedId = id
      this.isShowModalItem = true
    },

    showModalDelete (id) {
      this.selectedId = id
      this.isShowModalDelete = true
    },

    async submit () {
      try {
        await this.deleteItem(this.selectedId)
        this.isShowModalDelete = false
        this.selectedId = null
      } catch (error) {
      }
    }
  }
}
</script>
