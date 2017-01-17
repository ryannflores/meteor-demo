Contacts = new Mongo.Collection('contacts');

Meteor.methods({
    getContacts: function () {
        return Contacts.find({});
    }
});