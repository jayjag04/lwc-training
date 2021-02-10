import { LightningElement } from "lwc";

export default class LifeCycleParent extends LightningElement {
  name;
  changeHandler(event) {
    this.name = event.target.value;
  }

  showChild = false;

  constructor() {
    super();
    console.log("parent constructor called.");
  }

  connectedCallback() {
    console.log("parent connectedcalledback called");
  }

  renderedCallback() {
    console.log("parent renderedCallback called");
  }

  handleClick() {
    this.showChild = !this.showChild;
  }

  errorCallback(err, stack) {
    console.log(err.message, stack);
  }
}
