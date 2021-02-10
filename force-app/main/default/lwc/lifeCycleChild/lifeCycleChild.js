import { LightningElement } from "lwc";

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("child constructor called.");
  }

  connectedCallback() {
    console.log("child connectedcalledback called");
    throw new Error("loading of child component failed");
  }

  renderedCallback() {
    console.log("child renderedCallback called");
  }

  disconnectedCallback() {
    console.log("child disconnectedCallback called");
  }
}
