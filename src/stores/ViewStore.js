import {
  decorate, observable, action,
  // computed, autorun,
} from 'mobx';
// import { fromPromise } from 'mobx-utils';

class ViewStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  currentView = 'lon-lat';

  // ACTIONS....................................................................
  updateView = (newView) => {
    this.currentView = newView;
  };
}

decorate(ViewStore, {
  currentView: observable,
  updateView: action,
});

export default ViewStore;
