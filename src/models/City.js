import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'city'
  
  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      postalCode: this.attr(null),
      country: this.attr(null)
    };
  }
}