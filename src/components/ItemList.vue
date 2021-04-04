<template lang="pug">
.itemList
  h1 Items
  .items(v-if="!loading")
    .item(v-for="i in items" :key="i.id")
      h3 {{ i.name }}
      p {{ i.description }}
      span {{ i.price }}€ 
      button(@click="goToConf(i.id)") conf
  span(v-if="loading")
    IconSpinner
    span Chargement...
</template>

<script>
import itemService from "@/services/ItemService";
import IconSpinner from "@/components/IconSpinner";
import routeLoginMixin from "@/mixins/routeLoginMixin";

export default {
  name: "ItemList",
  mixins: [routeLoginMixin],
  components : {
    IconSpinner
  },
  data: function() {
    return {
      items: [],
      loading: false
    }
  },
  methods: {
    goToConf(idItem) {
      const url = process.env.VUE_APP_CONF_URL + "/" + idItem + "/" + this.$store.state.user.id + "/" + this.$store.state.user.token;
      window.location.href = url;
    }
  },
  mounted() {
    this.loading = true;
    this.manageLogin();
    itemService.getAll((response) => this.items = response.content, alert, () => { this.loading = false })
  }
};
</script>
