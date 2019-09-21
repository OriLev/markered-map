import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import MarkersList from './MarkersList';
import MarkerAdditionForm from '../MarkerAdditionForm';

const styles = () => ({
  markersDash: {
    width: '35%',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  markerList: {
    minHeight: '50%',
  },
  markerForm: {
    minHeight: '50%',
  },
});

const MarkersDashBoard = ({ classes, data }) => (
  <div className={classes.markersDash}>
    <div className={classes.markerList}>
      <MarkersList data={data} />
    </div>
    <div className={classes.markerForm}>
      <MarkerAdditionForm />
    </div>
  </div>
);

MarkersDashBoard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default inject('data')(withStyles(styles)(observer(MarkersDashBoard)));
