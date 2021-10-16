// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// ----------------------------------------------------------------------

export default function Chat() {
  return (
    <Page title='Abertura de Conta'>
      <Container>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Abertura de Conta
        </Typography>
      </Container>
    </Page>
  );
}
