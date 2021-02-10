import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  fullName = "Zero to Hero LWC";
  title = "aura";

  changeHandler(event) {
    this.title = event.target.value;
  }

  address = {
    city: "Lorton",
    postcode: 12345,
    country: "USA"
  };
  @track
  users = ["john", "george", "adam"];
  num1 = 10;
  num2 = 20;

  get firstuser() {
    return this.users[0];
  }

  get multiply() {
    return this.num1 * this.num2;
  }

  changefirstuser() {
    this.users[0] = this.users[0].toUpperCase();
    console.log(this.users[0]);
  }

  trackhandler(event) {
    // this.address.city = event.target.value;

    this.address = { ...this.address, city: event.target.value };
  }
}
