import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'option'
  
  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      price: this.attr(null),
      item: this.attr(null)
    };
  }
}