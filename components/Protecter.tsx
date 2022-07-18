import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from "next/link"
import Image from "next/image"

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


type ProtecterProps={
 children:React.ReactNode
}

export default function Protecter(props:ProtecterProps) { 

  
  const { user, error, isLoading } = useUser();
  if (isLoading) return (<Box sx={{ display: 'flex' }}>
     <CircularProgress />
    </Box>);
    if (error) return <div>{error.message}</div>;

  return (
    <>{ 
    user &&<>
    <Navbar name={user.nickname? user.nickname: '' } image={user.picture? user.picture: ''}/>
    {props.children}
    </>
    }
    {!user && <Grid container justifyContent="center">
    <Card sx={{ maxWidth: 450, marginTop:5, padding:5 }}>
      <Typography variant="h5" component="div">
       Would You Game Using Next.Js
      </Typography>
        <CardMedia
          component="img"
          height="300"
          image="/images/next.png"
          alt="green iguana"
        />
       <CardActions>
      <ThemeProvider theme={darkTheme}>
      <Grid container justifyContent="center">
         <Button size="large" sx={{backgroundColor: darkTheme.palette.background.default, color:darkTheme.palette.text.primary}} 
          variant="contained">
            <Link href="/api/auth/login"> <a >Login</a> </Link>
          </Button>
      </Grid>
      </ThemeProvider>
      </CardActions>
    </Card>
    </Grid>
    }
    </>
  );
}
