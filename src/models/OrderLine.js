import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'orderLine'
  
  static fields() {
    return {
      id: this.attr(null),
      amount: this.attr(null),
      price: this.attr(null),
      item: this.attr(null),
      order: this.attr(null)
    };
  }
}