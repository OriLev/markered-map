import React from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import PropTypes from 'prop-types';

// this component dictates which stores can be injected into app components
const StoreProvider = ({ store, children }) => (
  <MobxProvider
    // view={store.view}
    data={store.data}
    // markerAddition={store.markerAddition}
  >
    {children}
  </MobxProvider>
);

StoreProvider.propTypes = {
  store: PropTypes.shape({
    view: PropTypes.shape({}),
    router: PropTypes.shape({}),
    data: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
