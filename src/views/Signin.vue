<template>
  <main>
    <h1>This is an signin page</h1>

    <form @submit.prevent="login()">
      <input type="text" placeholder="Email" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Sign in">
    </form>
  </main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    username: '',
    password: ''
  }),

  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          (user) => console.log(user),
          ({ message }) => console.error(message)
        )
    }
  }
}
</script>
