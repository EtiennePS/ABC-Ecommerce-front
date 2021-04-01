<template lang="pug">
div
  label Email
  input(type="text" name="email" v-model="email") 
  br
  label Password
  input(type="text" name="password" v-model="password") 
  br
  button(@click="onClick" v-if="!loading") Validate
  span(v-if="loading")
    IconSpinner
    span Chargement...
</template>

<script>
import userService from "@/services/UserService";
import IconSpinner from "@/components/IconSpinner";

export default {
  name: "Login",
  components : {
    IconSpinner
  },
  data: function() {
    return {
      email: null,
      password: null,
      loading: false
    }
  },
  methods: {
    onClick() {
      if(!this.email || !this.password)
        alert("Please enter a valid mail and password");
      else {
        const data = {
          email: this.email,
          password: this.password
        }
        userService.authenticate(data, this.onAuthentication, alert, this.onAuthenticationDone);
      }
    },
    onAuthentication(response) {
      this.$store.commit('login', response);
      this.$router.push('/');
    },
    onAuthenticationDone() {
      this.loading = false;
    }
  },
  mounted() {
    this.$store.commit('logout');
  }
};
</script>
