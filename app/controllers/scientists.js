import Controller from '@ember/controller';

export default Controller.extend({
  newScientist: null,

  actions: {
    addScientist() {
      let a = this.store.createRecord('scientist', { name: this.get('newScientist') });
      a.save();
    },
  },
});
