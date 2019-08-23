<template>
  <header class="bg-primary py-3">
    <div class="container flex items-center justify-between">
      <p>
        <router-link
          :to="{name: 'Home'}"
          class="text-3xl font-semibold"
        >
          <span class="hidden md:block">Sale Products</span>
          <span class="md:hidden">SP</span>
        </router-link>
      </p>

      <nav>
        <button
          title="Realizar Pedido"
          :data-count="webCart.length"
          @click="isShowMiniCart = true"
        >
          <i />
        </button>

        <router-link
          v-if="!loggedIn"
          :to="{name: 'Signin'}"
        >
          <span>Sign in</span>
        </router-link>

        <template v-else>
          <router-link
            :to="{name: 'Dashboard'}"
            class="mx-3"
          >
            <span>Dashboard</span>
          </router-link>

          <button @click="logout()">
            <span>Log out</span>
          </button>
        </template>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    isShowMiniCart: false,
    webCart: []
  }),

  computed: {
    ...mapState('auth', ['loggedIn'])
  },

  methods: {
    ...mapActions('auth', ['signout']),

    async logout () {
      try {
        await this.signout()
        this.$router.push({ name: 'Signin' })
      } catch (error) {
      }
    }
  }
}
</script>
