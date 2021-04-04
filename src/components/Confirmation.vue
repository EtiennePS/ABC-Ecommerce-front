<template lang="pug">
.cart
  h1 Confirmation
  .cartLines(v-if="!loading")
    .cartLine(v-for="c in cartLines" :key="c.id")
      span {{ c.item.name }}&nbsp; 
      span {{ c.item.price }}€ 
      .option(v-for="o in c.selectedOptions" :key="o.id")
        span {{ o.name }}&nbsp; 
        span {{ o.price }}€ 
      span x{{ c.amount }}&nbsp;
      span {{ c.price * c.amount }}€ 
    label Billing address 
    select(v-model="billingAddress")
      option(v-for="a in addresses" v-bind:value="a") {{ a.name }} ({{ a.streetNum + " " + a.street + " " + a.city.name}})
    br
    label Delivery address 
    select(v-model="deliveryAddress")
      option(v-for="a in addresses" v-bind:value="a") {{ a.name }} ({{ a.streetNum + " " + a.street + " " + a.city.name}})
    br
    button(@click="createOrder") Order
  span(v-if="loading")
    IconSpinner
    span Loading...
</template>

<script>
import addressService from "@/services/AddressService";
import orderService from "@/services/OrderService";
import IconSpinner from "@/components/IconSpinner";

export default {
  name: "Confirmation",
  components : {
    IconSpinner
  },
  props: {
    cartLinesJson: String
  },
  data: function() {
    return {
      addresses: [],
      loading: false,
      billingAddress: null,
      deliveryAddress: null,
      cartlines: []
    }
  },
  computed: {
    selectedCartLineIds() {
      return Array.from(this.cartLines, cl => cl.id);
    }
  },
  methods: {
    createOrder() {
      const data = {
        billingAddress: this.billingAddress,
        deliveryAddress: this.deliveryAddress,
        cartLinesIds: this.selectedCartLineIds
      }
      orderService.create(data, () => this.$router.push('/orders'), alert);
    }
  },
  mounted() {
    this.cartLines = JSON.parse(this.cartLinesJson);
    this.loading = true;
    addressService.getAll((response) => this.addresses = response.content, alert, () => this.loading = false);
  }
};
</script>
