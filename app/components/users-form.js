import Ember from 'ember';

const { Component, get, set } = Ember;

const NS = 'users-form';

export default Component.extend({

  NS,

  classNames: [NS],

  user: {
    name: null,
    role: null
  },

  actions: {
    addUser() {
      this.sendAction('onAddUser', get(this, 'user'));
      set(this, 'user', { name: null, role: null });
    }
  }

});
