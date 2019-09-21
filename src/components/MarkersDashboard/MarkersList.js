import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  markerList: {
    width: '100%',
    listStyle: 'none',
  },
  item: {
    marginBottom: '7px',
    border: 'solid 1px black',
    padding: '5px',
  },
  itemFirstRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  itemSecondRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const MarkersList = ({ classes, data }) => (
  <ul className={classes.markerList}>
    {data.markers.map(marker => (
      <li key={marker.id} className={classes.item}>
        <div className={classes.itemFirstRow}>
          <span>{`name: ${marker.name}`}</span>
          <button type="button" onClick={() => data.deleteMarker(marker.id)}>delete</button>
        </div>
        <div className={classes.itemSecondRow}>
          <span>{`lon: ${marker.lon}`}</span>
          <span>{`lat: ${marker.lat}`}</span>
        </div>
      </li>
    ))}
  </ul>
);

MarkersList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default inject('data')(withStyles(styles)(observer(MarkersList)));
