<template lang="pug">
.cart
  h1 Orders
  .orders(v-if="!loading")
    .order(v-for="o in orders" :key="o.id")
      span Date {{ o.creationDate }}
      br
      span Billing address : {{ o.billingAddress.streetNum + " " + o.billingAddress.street + " " + o.billingAddress.city.name }}
      br
      span Delivery address : {{ o.deliveryAddress.streetNum + " " + o.deliveryAddress.street + " " + o.deliveryAddress.city.name }}
      .orderLine(v-for="ol in o.orderLines" :key="ol.id")
        span {{ ol.item.name }}&nbsp; 
        span ({{ ol.selectedOptions.length }} options) 
        span x{{ ol.amount }}&nbsp;
        span {{ ol.price * ol.amount }}€ 
  span(v-if="loading")
    IconSpinner
    span Loading...
</template>

<script>
import orderService from "@/services/OrderService";
import IconSpinner from "@/components/IconSpinner";

export default {
  name: "OrderList",
  components : {
    IconSpinner
  },
  data: function() {
    return {
      orders: [],
      loading: false
    }
  },
  mounted() {
    this.loading = true;
    orderService.getUserOrders((response) => this.orders = response.content, alert, () => { this.loading = false });
  }
};
</script>
