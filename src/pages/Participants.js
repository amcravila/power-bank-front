// material
import {
  Container,
  Stack,
  Typography,
  Card,
  Box,
  Grid,
  Button,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
//
import participants from '../_mocks_/participants';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '300px',
  height: '200px',
  objectFit: 'cover',
  position: 'absolute',
});

export default function Participants() {
  return (
    <Page title='Participantes'>
      <Container>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Instituições Financeiras
        </Typography>

        <Stack
          direction='row'
          flexWrap='wrap-reverse'
          alignItems='center'
          justifyContent='flex-end'
          sx={{ mb: 5 }}
        ></Stack>

        <Grid container spacing={3}>
          {participants.map((participant) => (
            <Grid key={participant.id} item xs={12} sm={6} md={3}>
              <Card>
                <Box
                  sx={{
                    pt: '100%',
                    position: 'relative',
                  }}
                >
                  <ProductImgStyle
                    alt={participant.name}
                    src={participant.cover}
                  />
                </Box>
                <Stack spacing={2} sx={{ pb: 3 }}>
                  <Box textAlign='center'>
                    <Typography variant='h4' noWrap>
                      {participant.name}
                    </Typography>
                    <Button
                      variant='contained'
                      color='primary'
                      sx={{ mt: 2, backgroundColor: '#00AB55' }}
                      component={Link}
                      href={participant.url}
                    >
                      Compartilhar Dados
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
