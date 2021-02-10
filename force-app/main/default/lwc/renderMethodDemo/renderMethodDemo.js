import { LightningElement } from "lwc";
import signinTemplate from "./signinTemplate.html";
import signupTempplate from "./signupTemplate.html";
import renderTemplate from "./renderMethodDemo.html";

export default class RenderMethodDemo extends LightningElement {
  selectedbtn;

  handleClick(event) {
    this.selectedbtn = event.target.label;
    console.log(event);
    console.log(this.selectedbtn);
  }

  render() {
    return this.selectedbtn === "Signin"
      ? signinTemplate
      : this.selectedbtn === "Signup"
      ? signupTempplate
      : renderTemplate;
  }
}
