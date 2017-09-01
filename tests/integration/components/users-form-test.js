import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('users-form', 'Integration | Component | users form', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#users-form}}
      template block text
    {{/users-form}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') > -1);
});
