import {
  decorate, observable, action,
  // computed, autorun,
} from 'mobx';
// import { fromPromise } from 'mobx-utils';

class MarkerAdditionStore {
  constructor(appStore) {
    this.appStore = appStore;
  }

  // OBSERVABLES................................................................
  lon = '';

  lat = '';

  name = '';

  // ACTIONS....................................................................
  updateLon = (newLon) => {
    this.lon = newLon;
  };

  updateLat = (newLat) => {
    this.lat = newLat;
  };

  updateName = (newName) => {
    this.name = newName;
  };

  addMarker = () => {
    if (this.lon.trim() === '' || this.lat.trim() === '') {
      console.log('missing input');
    } else {
      this.appStore.data.addMarker({
        lon: this.lon,
        lat: this.lat,
        name: this.name,
      });
      this.clearForm();
    }
  }

  clearForm = () => {
    this.lon = '';
    this.lat = '';
    this.name = '';
  }
}

decorate(MarkerAdditionStore, {
  lon: observable,
  lat: observable,
  name: observable,
  updateLon: action,
  updateLat: action,
  updateName: action,
  addMarker: action,
});

export default MarkerAdditionStore;
