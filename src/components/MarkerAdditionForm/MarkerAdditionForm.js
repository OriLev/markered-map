import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import FormTypeRadioButton from '../FormTypeRadioButton';
import AddMarkerByLocationForm from './AddMarkerByLocationForm';

const MarkerAdditionForm = ({ view: { currentView } }) => (
  <div>
    <FormTypeRadioButton />
    {currentView === 'location'
      ? <span>In construction</span>
      : <AddMarkerByLocationForm />}
  </div>
);


MarkerAdditionForm.propTypes = {
  view: PropTypes.shape({}).isRequired,
};

export default inject('view')(observer(MarkerAdditionForm));
