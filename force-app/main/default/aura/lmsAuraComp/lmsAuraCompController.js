({
  handleMessage: function (component, message) {
    if (message !== null && message.getParam("lmsData") !== null)
      component.set("v.messageReceived", message.getParam("lmsData").value);
  },

  inputHandler: function (component, event) {
    console.log(event.target.value);
    component.set("v.messageValue", event.target.value);
  },

  publishMessage: function (component) {
    var valueToSend = component.get("v.messageValue");
    var message = { lmsData: { value: valueToSend } };

    component.find("SampleMessageChannel").publish(message);
  }
});
