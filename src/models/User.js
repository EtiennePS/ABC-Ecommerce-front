import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'user'
  
  static fields() {
    return {
      id: this.attr(null),
      username: this.attr(null),
      email: this.attr(null),
      firstname: this.attr(null),
      lastname: this.attr(null),
      tel: this.attr(null)
    };
  }
}