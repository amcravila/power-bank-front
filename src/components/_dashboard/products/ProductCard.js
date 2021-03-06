import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import ColorPreview from '../../ColorPreview';

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, price, colors, status } = product;

  return (
    <Card>
      <Box>
        {status && (
          <Label
            variant='filled'
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to='#' color='inherit' underline='hover' component={RouterLink}>
          <Typography variant='subtitle2' noWrap>
            {name}
          </Typography>
        </Link>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <ColorPreview colors={colors} />
          <Typography variant='subtitle1'>
            <Typography
              component='span'
              variant='body1'
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            ></Typography>
            &nbsp; R$ {fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
