import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The VaccineCollection. It encapsulates state and variable values for stuff.
 */
class VaccineCollection {
  constructor() {
    this.name = 'VaccineCollection';
    this.collection = new Mongo.Collection(this.name);

    this.schema = new SimpleSchema({
      owner: String,
      ownerName: String,
      vaccineType: {
        type: String,
        allowedValues: ['Pfizer', 'Moderna', 'Johnson & Johnson', 'AstraZeneca', 'Other'],
      },
      dose1Lot: { label: 'Manufacturer Lot Number', type: Number },
      dose1Date: { label: 'Data Received', type: Date },
      dose1Site: { label: 'Clinic Site', type: String },
      dose2Lot: { label: 'Manufacturer Lot Number', type: Number },
      dose2Date: { label: 'Data Received', type: Date },
      dose2Site: { label: 'Clinic Site', type: String },
      // card: { label: 'Card', type: String },
    }, { tracker: Tracker });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
  }
}

export const Vaccine = new VaccineCollection();
