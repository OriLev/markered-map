import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
});

const FormTypeRadioButton = ({ classes, view = { currentView: 'lon-lat' } }) => {
  const { currentView, updateView } = view;
  function handleChange(event) {
    updateView(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Add marker by:</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={currentView} onChange={handleChange} row>
          <FormControlLabel value="lon-lat" control={<Radio />} label="Lon-Lat" />
          <FormControlLabel value="location" control={<Radio />} label="Location search" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

FormTypeRadioButton.propTypes = {
  view: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default inject('view')(withStyles(styles)(observer(FormTypeRadioButton)));
