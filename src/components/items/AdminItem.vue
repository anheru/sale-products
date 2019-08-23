<template>
  <div class="flex border-2 border-gray-400 py-2 items-center">
    <div class="w-1/3 px-3">
      <img
        :src="item.imageUrl"
        :alt="item.name"
      >
    </div>

    <div class="flex-auto pr-3">
      <p>
        <span>Nombre: </span>
        <span>{{ item.name }}</span>
      </p>
      <p>
        <span>Precio: </span>
        <span>{{ item.price }}</span>
      </p>
      <p class="mb-3">
        <span>Stock: </span>
        <span>{{ item.stock }} unidad(es)</span>
      </p>

      <button
        title="Editar"
        class="btn btn--info mr-3"
        @click="$emit('edit', item.id)"
      >
        editar
      </button>

      <button
        title="Eliminar"
        class="btn btn--danger"
        @click="$emit('delete', item.id)"
      >
        eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
