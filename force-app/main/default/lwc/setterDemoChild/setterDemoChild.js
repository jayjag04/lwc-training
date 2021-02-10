import { api, LightningElement } from "lwc";

export default class SetterDemoChild extends LightningElement {
  userDetails = {};

  @api
  get details() {
    return this.userDetails;
  }
  set details(data) {
    // data is immutable
    let { name, age } = { ...data };
    this.userDetails.age = age * 2;
    this.userDetails.name = name;
  }
}
