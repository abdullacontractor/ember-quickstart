import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default DS.RESTAdapter.extend(AdapterFetch, {
  host: 'https://wt-338cb734ff2c818318cae0dffd078606-0.sandbox.auth0-extend.com/ember-quickstart',
});
