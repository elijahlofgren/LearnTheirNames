Meteor.publish('names', function(userId) {
    return Names.find({createdBy: userId});
});
