import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import {
  subscribe,
  MessageContext,
  unsubscribe,
  APPLICATION_SCOPE
} from "lightning/messageService";

export default class LmsCompX extends LightningElement {
  subscription;

  msgRecived;

  @wire(MessageContext) msgContext;

  unsubscribe() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  subscribe() {
    if (this.subscription) return;
    this.subscription = subscribe(
      this.msgContext,
      SAMPLEMC,
      (msg) => {
        console.log(msg.lmsData.value);
        this.msgRecived = msg.lmsData.value;
      },
      { scope: APPLICATION_SCOPE }
    );
  }
}
