import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MapDisplay from '../MapDisplay';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: `${theme.spacing(2)}px`,
    margin: '10px auto',
    maxWidth: 1300,
    height: '80vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    listStyle: 'none',
  },
  markersDash: {
    width: '35%',
    color: 'black',
  },
});

const MarkersDashBoard = ({ className, data }) => (
  <div className={className}>
    <ul>
      {data.markers.map(marker => (
        <li>
          <span>{`lon: ${marker.lon} lat: ${marker.lat} name: ${marker.name}`}</span>
        </li>
      ))}
    </ul>
  </div>
);

MarkersDashBoard.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

const Body = ({ classes, data }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <MarkersDashBoard className={classes.markersDash} data={data} />
      <MapDisplay />
    </Paper>
  </div>
);

Body.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default inject('data')(withStyles(styles)(observer(Body)));
