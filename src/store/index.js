import axios from "axios";
import Vuex from "vuex";
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

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

export default store;
