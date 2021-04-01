<template lang="pug">
.cart
  h1 cartLines
  .cartLines(v-if="!loading")
    .cartLine(v-for="c in cartLines" :key="i.id")
      span {{ c.item.name }} 
      span {{ c.amount }} 
      span {{ c.item.price * c.amount }}€ 
      button(@click="goToConf") conf
  span(v-if="loading")
    IconSpinner
    span Chargement...
</template>

<script>
import cartLineService from "@/services/CartLineService";
import IconSpinner from "@/components/IconSpinner";

export default {
  name: "Cart",
  components : {
    IconSpinner
  },
  data: function() {
    return {
      cartLines: []
    }
  },
  methods: {
    toggleSelect(idcartLine) {
      console.log(idcartLine);
    }
  },
  mounted() {
    cartLineService.getUserCart((response) => this.cartLines = response.content, alert, () => { this.loading = false })
  }
};
</script>
