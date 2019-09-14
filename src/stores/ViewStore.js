// import {
//   decorate, observable, action, computed, autorun,
// } from 'mobx';
// import { fromPromise } from 'mobx-utils';

class ViewStore {
  constructor(appStore) {
    this.appStore = appStore;
  }
}

export default ViewStore;
