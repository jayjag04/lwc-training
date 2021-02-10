import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import {
  APPLICATION_SCOPE,
  publish,
  MessageContext
} from "lightning/messageService";

export default class LmsCompA extends LightningElement {
  @wire(MessageContext) msgContext;

  msgToPublish;

  handleChange(event) {
    this.msgToPublish = event.target.value;
  }
  pubishMsg() {
    const message = { lmsData: { value: this.msgToPublish } };
    publish(this.msgContext, SAMPLEMC, message);
  }
}
