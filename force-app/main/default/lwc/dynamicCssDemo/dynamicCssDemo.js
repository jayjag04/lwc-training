import { LightningElement } from "lwc";

export default class DynamicCssDemo extends LightningElement {
  widthVal = 10;

  changeHandler(event) {
    this.widthVal = event.target.value;
  }
  get getWidthVal() {
    return `width: ${this.widthVal}%`;
  }
}
