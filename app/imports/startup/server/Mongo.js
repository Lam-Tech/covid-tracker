import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Statuses } from '../../api/status/Status';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

function addStatuses(data) {
  console.log(`  Adding: ${data.owner} (${data.date})`);
  Statuses.collection.insert(data);
}

if (Statuses.collection.find().count() === 0) {
  if (Meteor.settings.defaultStatuses) {
    console.log('Creating default data.');
    Meteor.settings.defaultStatuses.map(data => addStatuses(data));
  }
}
