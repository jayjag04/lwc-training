import { api, LightningElement } from "lwc";

export default class LwcAuraCommunication extends LightningElement {
  @api title;

  handleClick() {
    console.log("button clicked");

    const custEve = new CustomEvent("sendmsg", {
      bubbles: true,
      detail: {
        msg: "msg from LWC to Aura"
      }
    });
    this.dispatchEvent(custEve);
  }
}
