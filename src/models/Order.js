import { Model } from "@vuex-orm/core";

export default class User extends Model {
  
  static entity = 'order'
  
  static fields() {
    return {
      id: this.attr(null),
      creationDate: this.attr(null),
      orderLines: this.attr(null),
      user: this.attr(null),
      billingAddress: this.attr(null),
      deliveryAddress: this.attr(null),
      cartLinesIds: this.attr(null)
    };
  }
}