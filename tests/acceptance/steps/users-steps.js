import steps from './steps';
import testSelector from 'ember-test-selectors';

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function(assert) {
  return steps(assert)

    .given('I go to the users page', function(next) {
      const action = visit('/users');
      assert.ok(action, this.step);
      andThen(() => next());
    })

    .when('I type something in the add input', function(next) {
      let selector = testSelector('add-input');
      this.ctx.newUser = { name: 'New user' };
      const action = fillIn(selector, this.ctx.newUser.name);
      assert.ok(action, this.step);
      andThen(() => next());
    })

    .then('I should see the new user in the list', function(next) {
      let list = find(testSelector('user-list-item'));
      assert.equal(list.length, 1, this.step);
      andThen(() => next());
    });

}
