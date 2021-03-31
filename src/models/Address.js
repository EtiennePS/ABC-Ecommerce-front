import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'address'
  
  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      streetNum: this.attr(null),
      street: this.attr(null),
      line1: this.attr(null),
      line2: this.attr(null),
      city: this.attr(null),
      user: this.attr(null)
    };
  }
}