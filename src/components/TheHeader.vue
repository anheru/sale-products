<template>
  <header class="bg-primary">
    <div>
      <div>
        <div>
          <p>
            <router-link to="{name: 'Home'}">
              <span>Sale Products</span>
              <span>SP</span>
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
              <span>Ingresar</span>
              <i></i>
            </router-link>
          </nav>
        </div>
      </div>
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
