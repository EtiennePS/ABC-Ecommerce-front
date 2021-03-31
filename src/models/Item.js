import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'item'
  
  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      description: this.attr(null),
      stock: this.attr(null),
      price: this.attr(null),
      productionDelay: this.attr(null),
      options: this.attr(null)
    };
  }
}