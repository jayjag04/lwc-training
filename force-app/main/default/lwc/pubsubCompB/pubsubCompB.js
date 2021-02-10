import { LightningElement } from "lwc";
import pubsub from "c/pubsub";

export default class PubsubCompB extends LightningElement {
  message;

  connectedCallback() {
    this.callSubscriber();
  }

  callSubscriber() {
    pubsub.subscribe("pubsub", (msg) => {
      console.log(msg);
      this.message = msg;
    });
  }
}
