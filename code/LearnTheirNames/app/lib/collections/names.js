Names = new Mongo.Collection('names');

// A nice intro to using schemas here:
// https://medium.com/meteor-js/how-to-build-web-apps-ultra-fast-with-meteor-iron-scaffolding-and-automatic-form-generation-11734eda8e67

Names.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    description: {
        type: String,
        label: "Description",
        max: 1024
    },
    createdBy: {
        type: String,
        autoValue: function() {
            return this.userId;
        }
}}));

if (Meteor.isServer) {
    Names.allow({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function (userId, doc) {
            return true;
        }
    });

}
