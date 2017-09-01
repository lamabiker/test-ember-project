import Ember from 'ember';

const { Component } = Ember;

const NS = 'users-list';

export default Component.extend({

  NS,

  classNames: [NS],

  actions: {
    deleteUser(user) {
      this.sendAction('onDeleteUser', user);
    }
  }

});
