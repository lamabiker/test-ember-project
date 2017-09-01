import Ember from 'ember';
import yadda from '../../helpers/yadda';
import testSelector from 'ember-test-selectors';

const { String: { dasherize } } = Ember;

export default function(assert) {
  return yadda.localisation.English.library()

    .when('I navigate to the $TARGET page', function(target, next) {
      let url = `/${dasherize(target)}`;
      visit(url);
      assert.equal(currentURL(), url, this.step);
      andThen(() => next());
    })

    .when('I click on the $TARGET', function(target, next) {
      const action = click(testSelector(dasherize(target)));
      assert.ok(action, this.step);
      andThen(() => next());
    });

}
