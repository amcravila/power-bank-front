import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
// material
import { Container } from '@mui/material';
// components
import Page from '../components/Page';
import { Button, Box, Divider, MenuItem, Typography } from '@mui/material';

import account from '../_mocks_/account';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Minha Conta',
    icon: homeFill,
    linkTo: '#',
  },
  {
    label: 'Meus Dados',
    icon: personFill,
    linkTo: '#',
  },
  {
    label: 'Configurações',
    icon: settings2Fill,
    linkTo: '#',
  },
];

export default function Profile() {
  return (
    <Page title='Profile'>
      <Container>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle1' noWrap>
            {account.displayName}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            // onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color='inherit' variant='outlined'>
            Logout
          </Button>
        </Box>
      </Container>
    </Page>
  );
}
