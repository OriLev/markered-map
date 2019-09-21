import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MapDisplay from '../MapDisplay';
import MarkersDashBoard from '../MarkersDashboard';

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
});

const Body = ({ classes, data }) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <MarkersDashBoard data={data} />
      <MapDisplay />
    </Paper>
  </div>
);

Body.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default inject('data')(withStyles(styles)(observer(Body)));
