import { LightningElement } from "lwc";
import MOMENT1 from "@salesforce/resourceUrl/moment1";
import ANIMATE from "@salesforce/resourceUrl/animate";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class ThirdPartyFiles extends LightningElement {
  currentDate;

  isLibLoaded = false;

  setDateOnScreen() {
    this.currentDate = moment().format("LLLL");
  }
  renderedCallback() {
    if (this.isLibLoaded) return;

    Promise.all([
      loadStyle(this, ANIMATE + "/animate/animate.min.css"),
      loadScript(this, MOMENT1 + "/moment/moment.min.js")
    ]).then(() => {
      console.log("js file loaded");
      this.isLibLoaded = true;
      this.setDateOnScreen();
    });
  }
}
