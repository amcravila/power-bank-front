import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  return (
    <Box
      component='img'
      src='/static/logo_plugai.png'
      sx={{ width: 220, height: 80, ...sx }}
    />
  );
}
