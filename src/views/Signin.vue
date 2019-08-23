<template>
  <main class="flex items-center justify-center bg-gray-200">
    <form
      class="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="submit()"
    >
      <div class="mb-4">
        <label
          class="form-label"
          for="username"
        >
          Username
        </label>
        <input
          id="username"
          v-model="form.username"
          class="form-input"
          type="text"
          placeholder="Username"
        >
      </div>
      <div class="mb-6">
        <label
          class="form-label"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="form.password"
          class="form-input"
          type="password"
          placeholder="**************"
        >
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      username: '',
      password: ''
    }
  }),

  methods: {
    ...mapActions('auth', ['signin']),

    async submit () {
      if (!this.form.username || !this.form.password) return
      try {
        await this.signin(this.form)
        const { redirect } = this.$route.query

        if (redirect) this.$router.push(redirect)
        else this.$router.push({ name: 'Dashboard' })
      } catch ({ message }) {
      }
    }
  }
}
</script>
