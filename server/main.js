import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

export const Nomes = new Mongo.Collection('nomes');


Meteor.startup(() => {
  // code to run on server at startup
});


