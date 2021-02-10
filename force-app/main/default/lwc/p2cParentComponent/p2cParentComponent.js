import { LightningElement } from "lwc";

export default class P2cParentComponent extends LightningElement {
  inputVal;
  handleClick() {
    this.template.querySelector("c-p2c-slider-component").setSliderVal(75);
  }
  handleChange(event) {
    this.inputVal = event.target.value;
  }
  carouselData = [
    {
      src:
        "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header: "First Card",
      description: "First Description"
    },
    {
      src:
        "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header: "Second Card",
      description: "Second Description"
    },
    {
      src:
        "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header: "Third Card",
      description: "Third Description"
    }
  ];
}
