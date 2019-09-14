import { configure } from 'mobx';

import ViewStore from './ViewStore';
import DataStore from './DataStore';
import MarkerAdditionStore from './MarkerAdditionStore';

configure({ enforceActions: 'observed' });

export default class AppStore {
  constructor() {
    this.view = new ViewStore(this);
    this.data = new DataStore(this);
    this.markerAddition = new MarkerAdditionStore(this);
  }
}
