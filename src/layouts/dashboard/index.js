import { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Hidden, Box, AppBar, Toolbar, IconButton } from '@mui/material';
//
import DashboardSidebar from './DashboardSidebar';
import PieChartIcon from '@material-ui/icons/PieChart';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LanguageIcon from '@material-ui/icons/Language';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <Hidden lgUp>
        <Box display='flex' sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Toolbar sx={{ mt: 3 }}>
              <IconButton
                edge='start'
                color='inherit'
                component={RouterLink}
                to='/dashboard/app'
              >
                <PieChartIcon />
              </IconButton>
            </Toolbar>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                component={RouterLink}
                to='/dashboard/chat'
              >
                <ChatIcon />
              </IconButton>
            </Toolbar>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                component={RouterLink}
                to='/dashboard/customers'
              >
                <GroupIcon />
              </IconButton>
            </Toolbar>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                component={RouterLink}
                to='/dashboard/products'
              >
                <LocalMallIcon />
              </IconButton>
            </Toolbar>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                component={RouterLink}
                to='/dashboard/participants'
              >
                <LanguageIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Hidden>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
