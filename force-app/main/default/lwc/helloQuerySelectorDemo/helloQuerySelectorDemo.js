import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  users = ["user 1", "user 2", "user 3"];
  fetchDetailHeader() {
    const elem = this.template.querySelector("h1");
    console.log(elem.innerText);
    elem.style.border = "1px solid red";

    const userElements = this.template.querySelectorAll(".name");
    console.log(userElements.length);
    Array.from(userElements).forEach((item) => {
      console.log(item.innerText);
      item.setAttribute("title", item.innerText);
    });

    // lwc;dom='manual' demo
    const elem1 = this.template.querySelector(".parentElem");
    elem1.innerHTML = "<p>this is a child para</p1>";
  }
}
