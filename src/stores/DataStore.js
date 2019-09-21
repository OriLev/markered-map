import {
  decorate, observable, action, computed,
} from 'mobx';

class DataStore {
  constructor(appStore) {
    this.appStore = appStore;
    this.markerIdCounter = 0;
  }
  // OBSERVABLES................................................................

  markers = [
    {
      id: 0,
      name: 'point-1',
      lon: 32.092446,
      lat: 34.782679,
    },
    {
      name: 'point-2',
      lon: 29.556066513061523,
      lat: 34.950893402099609,
    },
    {
      name: 'point-3',
      lon: 31.951799392700195,
      lat: 35.9404182434082,
    },
  ];

  // COMPUTEDS..................................................................
  get center() {
    let lon = 0;
    let lat = 0;
    const numOfMarkers = this.markers.length;
    for (const marker of this.markers) {
      lon += marker.lon;
      lat += marker.lat;
    }
    return [lon / numOfMarkers, lat / numOfMarkers];
  }

  get polyLinesLocation() {
    if (this.markers.length > 0) {
      return [
        ...this.markers.map(marker => ([marker.lon, marker.lat])),
        [this.markers[0].lon, this.markers[0].lat],
      ];
    }
    return [];
  }

  // ACTIONS....................................................................
  addMarker = (markerData) => {
    const { name, lon, lat } = markerData;
    const partData = { lon, lat, id: this.markerIdCounter };
    this.markerIdCounter += 1;
    let newMarker;
    if (!name.trim()) {
      newMarker = {
        ...partData,
        name: `${lon}-${lat}`,
      };
    } else {
      newMarker = { ...partData, name };
    }
    this.markers.push(newMarker);
  };

  deleteMarker = (id) => {
    const markerIndex = this.findMarkerIndex(id);
    this.markers.splice(markerIndex, 1);
  }

  findMarkerIndex = id => this.markers.findIndex(element => element.id === id);
}

decorate(DataStore, {
  markers: observable,
  center: computed,
  polyLinesLocation: computed,
  addMarker: action,
  deleteMarker: action,
});

export default DataStore;
