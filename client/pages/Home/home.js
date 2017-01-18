Template.HomeTemplate.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('contacts');
    });
});

Template.HomeTemplate.helpers({
    getProfileSingleString: function () {
        return 'Adrian Castro';
    },
    getProfile: function () {
        console.log('test');
        return { name: 'Ryann Flores', company: 'Idigital Enterprises Inc.' };
    },
    getContacts: function () {
        return Contacts.find({});
    }
});

Template.HomeTemplate.events({
    'click .btn-submit': function () {
        alert('The BUTTON was clicked!');
    }
});