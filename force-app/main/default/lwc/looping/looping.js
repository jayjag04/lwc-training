import { LightningElement } from "lwc";

export default class Looping extends LightningElement {
  carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"];

  ceoList = [
    { id: 1, name: "Sundar", company: "Google" },
    { id: 2, name: "Tim Cook", company: "Apple" },
    { id: 3, name: "Jay Jaganathan", company: "SS LLC" },
    { id: 4, name: "Marc Benioff", company: "Salesforce" }
  ];
}
