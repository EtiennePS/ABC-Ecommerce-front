import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import ItemList from "@/components/ItemList";
import Cart from "@/components/Cart";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Login",
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
