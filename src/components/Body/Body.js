import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import { ReactBingmaps } from 'react-bingmaps';
import Paper from '@material-ui/core/Paper';

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
  map: {
    width: '65%',
  },
  markersDash: {
    width: '35%',
    color: 'black',
  },
});

const MapDisplay = ({ className }) => (
  <ReactBingmaps
    bingmapKey="AqnGWdRb63XPpubpT9NyFKou487EFaJm3wd7j4qBpJrFMGfZEYgqSg6rOSK6ZK9I"
    className={className}
  />
);

MapDisplay.propTypes = {
  className: PropTypes.string.isRequired,
};

const MarkersDashBoard = ({ className }) => (
  <div className={className}>Markers Dashboard to be build here</div>
);

MarkersDashBoard.propTypes = {
  className: PropTypes.string.isRequired,
};

const Body = ({ classes }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <MarkersDashBoard className={classes.markersDash} />
      <MapDisplay className={classes.map} />
    </Paper>
  </div>
);

Body.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default inject('data')(withStyles(styles)(observer(Body)));
