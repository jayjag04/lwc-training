import { api, LightningElement } from "lwc";

export default class P2cSliderComponent extends LightningElement {
  val = 20;

  changeHandler(eve) {
    this.val = eve.target.value;
  }
  @api
  setSliderVal(v) {
    console.log(v);
    this.val = v;
  }
}
