import { LightningElement } from "lwc";

export default class SlotChildDemo extends LightningElement {
  slotChange() {
    const ele = this.template.querySelector(".ft");
    ele.classList.remove("slds-hide");
  }
}
