import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { OneQ } from '../types/onequestion';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useUser } from '@auth0/nextjs-auth0';


type OneQuestion={
    question:OneQ
  }

  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }


export default function AnsweredCard( props: OneQuestion) {
    const votedOne=props.question.optionOne.votes.length;
    const votedTwo=props.question.optionTwo.votes.length;
    const { user} = useUser();
    const userName=user?.nickname? user.nickname : ""
    const answeredOne=props.question.optionOne.votes.includes(userName);
    const image=<img src="https://img.icons8.com/fluency/35/000000/checked-checkbox.png"/>
  return (
    <>
    <Grid container justifyContent="center">
    <Card sx={{ maxWidth: 450, marginTop:5, padding:5 }}>
      <Typography variant="h5" component="div">
       Would You Game Using Next.Js
      </Typography>
        <CardMedia
          component="img"
          height="200"
          image={props.question.avatarURL}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         {props.question.author} asked would you rather
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Box sx={{ width: '100%' }}>
            <h3>{props.question.optionOne.text}</h3>
            <small>Number of Votes {votedOne}</small>
            <LinearProgressWithLabel value={(votedOne*100)/(votedOne+votedTwo)} /> {answeredOne && image}
        </Box>
          <br/> <strong>OR</strong> <br/>
          <Box sx={{ width: '100%' }}>
            <h3>{props.question.optionTwo.text} </h3>
            <small>Number of Votes {votedTwo}</small>
            <LinearProgressWithLabel value={(votedTwo*100)/(votedOne+votedTwo)} /> {!answeredOne && image}
          </Box>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </>
  );
}

