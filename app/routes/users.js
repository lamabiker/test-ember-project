import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user')
    });
  },

  actions: {

    addUser(params) {
      let newUser = this.store.createRecord('user', params);
      newUser.save();
    },

    deleteUser(userId) {
      this.store.findRecord('user', userId, { backgroundReload: false })
        .then((user) => user.destroyRecord());
    }

  }

});
