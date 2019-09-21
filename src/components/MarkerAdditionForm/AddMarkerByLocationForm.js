import React from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const LocInput = styled(Input)({
  color: 'black',
  cursor: 'pointer',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  minHeight: '100px',
});

const StyledFormControl = styled(FormControl)({
  flex: '1 0 auto',
  maxWidth: 'calc(100% - 108px)',
});

const StyledButton = styled(Button)({
  minWidth: '108px',
  marginTop: '16px',
  minHeight: '36px',
  maxHeight: '36px',
});

const AddMarkerByLocationForm = ({ markerAddition: formState }) => {
  const handleLonChange = (e) => {
    formState.updateLon(e.target.value);
  };
  const handleLatChange = (e) => {
    formState.updateLat(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    formState.addMarker();
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledFormControl error={formState.isErrorState}>
        <InputLabel htmlFor="lon-input">Longtitude</InputLabel>
        <LocInput
          id="lon-input"
          value={formState.lon}
          onChange={handleLonChange}
          type="text"
        />
        {
          formState.isErrorState
            ? <FormHelperText id="component-error-text">{formState.errorMessage}</FormHelperText>
            : null
        }
      </StyledFormControl>
      <StyledFormControl error={formState.isErrorState}>
        <InputLabel htmlFor="lat-input">Latitude</InputLabel>
        <LocInput
          id="lat-input"
          value={formState.lat}
          onChange={handleLatChange}
          type="text"
        />
        {
          formState.isErrorState
            ? <FormHelperText id="component-error-text">{formState.errorMessage}</FormHelperText>
            : null
        }
      </StyledFormControl>
      <br />
      <StyledButton color="secondary" type="submit">
        {
          formState.postingInProgress
            ? <CircularProgress size={20} />
            : <Typography>Add Marker</Typography>
        }
      </StyledButton>
    </StyledForm>
  );
};


AddMarkerByLocationForm.propTypes = {
  markerAddition: PropTypes.shape({}).isRequired,
};

export default inject('markerAddition')(observer(AddMarkerByLocationForm));
