import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.internet.userName();
  },

  role() {
    return faker.company.bs();
  }

});
