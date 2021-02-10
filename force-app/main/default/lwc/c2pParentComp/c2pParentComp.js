import { LightningElement } from "lwc";

export default class C2pParentComp extends LightningElement {
  showModal = false;
  handleClick() {
    this.showModal = true;
  }

  closeHandlerParent(event) {
    this.showModal = false;
    console.log(event.detail.msg);
  }

  div1CloseHandler() {
    console.log("div1CloseHandler called - bubbles example");
  }
}
