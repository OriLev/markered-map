import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { ReactBingmaps } from 'react-bingmaps';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  map: {
    width: '65%',
  },
});

const MapDisplay = ({ classes, data }) => (
  <ReactBingmaps
    bingmapKey="AqnGWdRb63XPpubpT9NyFKou487EFaJm3wd7j4qBpJrFMGfZEYgqSg6rOSK6ZK9I"
    className={classes.map}
    pushPins={data.markers.map(marker => ({
      location: [marker.lon, marker.lat],
      option: { color: 'red' },
    }))}
    polyline={{
      location: data.polyLinesLocation,
      option: { strokeColor: 'blue', strokeThickness: 5 },
    }}
      // [
      //   [32.092446, 34.782679],
      //   [29.556066513061523, 34.950893402099609],
      //   [31.951799392700195, 35.9404182434082],
      //   [32.092446, 34.782679],
      // ],
    // center={[31.951799392700195, 35.9404182434082]}
    center={data.center}
    zoom={5}
  />
);

MapDisplay.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default inject('data')(withStyles(styles)(observer(MapDisplay)));
