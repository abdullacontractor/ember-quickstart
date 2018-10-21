import Route from '@ember/routing/route';

export default Route.extend({
  init(){
    this._super(...arguments);
    if (window.addEventListener && navigator && navigator.serviceWorker) {
      window.addEventListener('online',  function(){
        navigator.serviceWorker.controller.postMessage({event: 'online'});
      });

      window.addEventListener('offline',  function(){
        navigator.serviceWorker.controller.postMessage({event: 'offline'});
      });

      navigator.serviceWorker.addEventListener('message', (msg) => {
        this.store.peekAll(JSON.parse(msg.data).modelName).filterBy('id', null).invoke('deleteRecord');
        this.refresh();
      });
    }
  }
});
