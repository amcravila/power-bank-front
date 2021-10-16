// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList } from '../components/_dashboard/products';
//
import PRODUCTS from '../_mocks_/products';

// ----------------------------------------------------------------------

export default function Products() {
  return (
    <Page title='Produtos'>
      <Container>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Produtos
        </Typography>

        <Stack
          direction='row'
          flexWrap='wrap-reverse'
          alignItems='center'
          justifyContent='flex-end'
          sx={{ mb: 5 }}
        ></Stack>

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
