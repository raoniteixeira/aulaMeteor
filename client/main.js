import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.msg.onCreated( function msgOnCreate() {
  this.name = new ReactiveVar('');
});

Template.msg.helpers({
  'name': function() {
    return Template.instance().name.get();
  }
});

Template.msg.events({
  /*'keypress': function(event, instance) {
    console.log('Você digitou a tecla ' + event.originalEvent.key);
  }*/
  'submit form': function(event, instance) {
    event.preventDefault();
    instance.name.set($('[name=xyz]').val());
    console.log(instance)
  }
});