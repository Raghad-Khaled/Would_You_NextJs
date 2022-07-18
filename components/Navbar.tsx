import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

type navProps={
    name:string
    image:string
}

const Navbar = (props: navProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CelebrationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
             
            <MenuItem  >
              <Typography textAlign="center">
                <Link href="/scoreboard">Score board</Link>
              </Typography>
            </MenuItem>
            <MenuItem  >
              <Typography textAlign="center">
                  <Link href="/add">New Question</Link>
              </Typography>
            </MenuItem>
            <MenuItem >
              <Typography textAlign="center">
                 <Link href="/api/auth/logout">log out</Link>
              </Typography>
            </MenuItem>
            </Menu>
          </Box>
          <CelebrationIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link href="/scoreboard">Score board</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link href="/add">New Question</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link href="/api/auth/logout">log out</Link>
              </Button>
          </Box>



          <Box sx={{  }}>
             <Stack direction="row" spacing={2}>
             <Typography textAlign="center">
                <h4>{props.name}</h4>
              </Typography>
                <Avatar alt="Remy Sharp" src={props.image} style={{alignSelf: 'center'}} />
              </Stack> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
