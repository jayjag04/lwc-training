import { LightningElement } from "lwc";

export default class C2pModalComp extends LightningElement {
  footerClickHandler() {
    console.log("footerClickHandler  called");
  }
  footerCloseHandler() {
    console.log("footerCloseHandler  called");
  }
  okHandler() {
    let closeEvent = new CustomEvent("close", {
      bubbles: true,
      detail: {
        msg: "data from child"
      }
    });
    this.dispatchEvent(closeEvent);
  }
}
