<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <template v-if="!$store.state.user">
      <router-link to="/login">Login</router-link>
    </template>
    
    <template v-if="$store.state.user">
      <router-link to="/items">Items</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/orders">Orders</router-link> |
      <router-link to="/logout" >Logout</router-link>
    </template>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      user: null
    }
  },
  mounted() {
    this.user = this.$store.state.user;
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
