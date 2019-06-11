<template>
  <header class="bg-primary py-3">
    <div class="container flex items-center justify-between">
      <p>
        <router-link :to="{name: 'Home'}" class="text-3xl font-semibold">
          <span class="hidden md:block">Sale Products</span>
          <span class="md:hidden">SP</span>
        </router-link>
      </p>

      <nav>
        <button
          @click="isShowMiniCart = true"
          title="Realizar Pedido"
          :data-count="webCart.length"
        >
          <i></i>
        </button>

        <router-link :to="{name: 'Signin'}">
          <span>Sign in</span>
          <i></i>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    isShowMiniCart: false,
    webCart: []
  })
}
</script>
