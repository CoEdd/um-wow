import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../public/resource/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const Sitemark = '/resource/umwowlogo.png';

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Left Section: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Sitemark} alt="UMWOW Logo" style={{ width: '100px', height: 'auto' }} />
          </Box>

          {/* Center Section: Navigation Buttons */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
              mx: 2, // Add horizontal margin for spacing
            }}
          >
            <Button variant="text" color="info" size="small">
              ABOUT UM
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              TOUR
            </Button>
            <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
              FAQ
            </Button>
          </Box>

          {/* Right Section: Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ColorModeIconDropdown />
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              <ColorModeIconDropdown size="medium" />
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                top: 'var(--template-frame-height, 0px)',
              },
            }}
          >
            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
              <MenuItem>Features</MenuItem>
              <MenuItem>Testimonials</MenuItem>
              <MenuItem>Highlights</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Blog</MenuItem>
              <Divider sx={{ my: 3 }} />
              <MenuItem>
                {/* <Button color="primary" variant="contained" fullWidth>
                  Sign up
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color="primary" variant="outlined" fullWidth>
                  Sign in
                </Button> */}
              </MenuItem>
            </Box>
          </Drawer>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}