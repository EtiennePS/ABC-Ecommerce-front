import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import axios from "axios";
import { createStore } from 'vuex';
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import { Address, CartLine, City, Country, Item, Option, Order, OrderLine, User } from "@/models";

VuexORM.use(VuexORMAxios, { axios });

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Address);
database.register(CartLine);
database.register(City);
database.register(Country);
database.register(Item);
database.register(Option);
database.register(Order);
database.register(OrderLine);
database.register(User);
console.log("test");

// Create Vuex Store and register database through Vuex ORM.
const store = createStore({
  plugins: [VuexORM.install(database)],
  state() {
    return {
      user: null
    }
  },
  mutations: {
    login(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = null;
    }
  }
});

createApp(App)
.use(store)
.use(router)
.mount('#app');

export default store;
