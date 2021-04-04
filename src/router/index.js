import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import ItemList from "@/components/ItemList";
import Cart from "@/components/Cart";
import Confirmation from "@/components/Confirmation";
import Orders from "@/components/OrderList";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: Login
  },
  {
    path: "/items",
    name: "ItemList",
    component: ItemList
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/items/:idUser/:token",
    name: "ItemListExt",
    component: ItemList,
    props: true
  },
  {
    path: "/cart/:idUser/:token",
    name: "CartExt",
    component: Cart,
    props: true
  },
  {
    path: "/confirm",
    name: "Confirm",
    component: Confirmation,
    props: true
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
