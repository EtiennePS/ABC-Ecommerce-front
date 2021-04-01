<template>
  <div class="home">
    <span>Welcome {{ $store.state.user ? $store.state.user.username : "guest" }}</span>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>