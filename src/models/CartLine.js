import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'option'
  
  static fields() {
    return {
      id: this.attr(null),
      amount: this.attr(null),
      item: this.attr(null),
      user: this.attr(null)
    };
  }
}