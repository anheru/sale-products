<template>
  <main>
    <h1>This is an signin page</h1>

    <form @submit.prevent="submit()">
      <input type="text" placeholder="Email" v-model="form.username">
      <input type="password" placeholder="Password" v-model="form.password">
      <input type="submit" value="Sign in">
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
