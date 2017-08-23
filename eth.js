import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
      var template = Template.instance();
    return Template.instance().counter.get();
      web3.eth.getBalance("0x8e4d25a58f87ba70AD55a134D833a934961d89D3",
     function (err,res){
          TemplateVar.set(template, "counter",res);
      })
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
