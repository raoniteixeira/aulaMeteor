import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.msg.onCreated( function msgOnCreate() {
  this.name = new ReactiveVar('');
});

Template.msg.helpers({
  'name': function() {
    return Template.instance().name.get();
  },
  'nomeEstaVazio': function() {
    if (Template.instance().name.get() == '')
      return true;
    else
      return false;
  },
  'lista': function() {
    return ['coisa1', 'coisa2', 'coisa3'];
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