import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'country'
  
  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      isDeliverable: this.attr(null)
    };
  }
}