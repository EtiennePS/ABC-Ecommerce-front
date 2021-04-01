<template lang="pug">
.itemList
  h1 Items
  .items(v-if="!loading")
    .item(v-for="i in items" :key="i.id")
      h3 {{ i.name }}
      p {{ i.description }}
      span {{ i.price }}€ 
      button(@click="goToConf") conf
  span(v-if="loading")
    IconSpinner
    span Chargement...
</template>

<script>
import itemService from "@/services/ItemService";
import IconSpinner from "@/components/IconSpinner";

export default {
  name: "ItemList",
  components : {
    IconSpinner
  },
  data: function() {
    return {
      items: []
    }
  },
  methods: {
    goToConf(idItem) {
      alert(process.env.VUE_APP_CONF_URL + idItem);
    }
  },
  mounted() {
    itemService.getAll((response) => this.items = response.content, alert, () => { this.loading = false })
  }
};
</script>
