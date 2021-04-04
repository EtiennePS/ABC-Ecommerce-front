<template lang="pug">
.cart
  h1 Cart
  .cartLines(v-if="!loading")
    .cartLine(v-for="c in cartLines" :key="c.id")
      span {{ c.item.name }}&nbsp; 
      span ({{ c.selectedOptions.length }} options) 
      span x{{ c.amount }}&nbsp;
      span {{ c.price * c.amount }}€ 
      input(type="checkbox" v-model="c.isSelected")
    button(@click="goToConfirmation") Confirm
  span(v-if="loading")
    IconSpinner
    span Loading...
</template>

<script>
import cartLineService from "@/services/CartLineService";
import IconSpinner from "@/components/IconSpinner";
import routeLoginMixin from "@/mixins/routeLoginMixin";

export default {
  name: "Cart",
  mixins: [routeLoginMixin],
  components : {
    IconSpinner
  },
  data: function() {
    return {
      cartLines: [],
      loading: false
    }
  },
  computed: {
    selectedCartLines() {
      return this.cartLines.filter(cl => cl.isSelected);
    }
  },
  methods: {
    goToConfirmation() {
      console.log(this.selectedCartLines);
      this.$router.push({name:'Confirm', params: { cartLinesJson: JSON.stringify(this.selectedCartLines)}});
    }
  },
  mounted() {
    this.loading = true;
    this.manageLogin();
    cartLineService.getUserCart((response) => this.cartLines = response.content, alert, () => { this.loading = false })
  }
};
</script>
