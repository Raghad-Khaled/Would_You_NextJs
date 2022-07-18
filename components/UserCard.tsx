import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image'


type UserProps ={ user:{
    id: string,
    name: string,
    avatarURL: string,
    answers: {
    [key:string]: string | undefined
    },
    questions:Array<string>
 }
}

export default function UserCard( props: UserProps) {

  const questionAnswered=Object.keys(props.user.answers).length;
  const questionAsked=props.user.questions.length;
  const score=questionAnswered+questionAsked;

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
          image={props.user.avatarURL}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.user.name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
         Score {score}
        </Typography>
        <Typography variant="h6" color="text.secondary">
         Questions Answered {questionAnswered}
          <br/> <br/>
          Question Created {questionAsked}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </>
  );
}

